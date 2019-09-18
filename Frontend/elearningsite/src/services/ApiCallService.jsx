
export function fetchQuestion() {
    return fetch('http://localhost:8080/question')
        .then(response => response.json());
}

export function fetchUser(){
    return fetch('http://localhost:8080/auth/signin')
        .then(response => response.json()) 
}


