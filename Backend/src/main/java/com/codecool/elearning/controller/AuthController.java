package com.codecool.elearning.controller;

import com.codecool.elearning.daoImplementation.UserDBService;
import com.codecool.elearning.model.userEntity.UserCredentials;
import com.codecool.elearning.security.JwtTokenServices;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UserDBService userDBService;

    private final AuthenticationManager authenticationManager;

    private final JwtTokenServices jwtTokenServices;

    private final PasswordEncoder passwordEncoder;

    public AuthController(AuthenticationManager authenticationManager, JwtTokenServices jwtTokenServices, UserDBService userDBService) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenServices = jwtTokenServices;
        this.userDBService = userDBService;
        this.passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @PostMapping("/signin")
    public ResponseEntity signin(@RequestBody UserCredentials data, HttpServletResponse response,
                                 @CookieValue(value = "username",defaultValue ="Ádám") String userName) {

        try {
            String username = data.getUsername();
            // authenticationManager.authenticate calls loadUserByUsername in CustomUserDetailsService
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, data.getPassword()));
            List<String> roles = authentication.getAuthorities()
                    .stream()
                    .map(GrantedAuthority::getAuthority)
                    .collect(Collectors.toList());

            String token = jwtTokenServices.createToken(username, roles);

            Map<Object, Object> model = new HashMap<>();
            model.put("username", username);
            model.put("roles", roles);

            Cookie cookie=new Cookie("token",token);
            cookie.setHttpOnly(true);
            cookie.setMaxAge(-1);
            response.addCookie(cookie);

            return ResponseEntity.ok(model);
        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Invalid username/password supplied");
        }
    }

    @PostMapping("/register")
    @ResponseBody
    public boolean register(@RequestBody UserCredentials userCredentials){
        try {
            userDBService.registerNewUser(userCredentials);
            return true;
        }
        catch (Exception e){
            return false;
        }
    }

    @PostMapping("/logout")
    public void logout(HttpServletRequest request,HttpServletResponse response){
        Cookie[] cookies =request.getCookies();
        for (Cookie cookie: cookies){
            cookie.setMaxAge(0);
            response.addCookie(cookie);
        }
    }
}