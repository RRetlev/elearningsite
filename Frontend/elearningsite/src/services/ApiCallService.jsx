export function fetchQuestion() {
    return fetch('http://localhost:8080/question')
        .then(response => response.json());
}

export function fetchUser() {
    return fetch('http://localhost:8080/auth/signin')
        .then(response => response.json())
}

export function postUserRegistration(username, password) {
    return fetch('http://localhost:8080/auth/signin', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                username: username,
                password: password
            }),
    })
}


export function postUserLogin(username, password) {
    return fetch('http://localhost:8080/auth/signin', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                username: username,
                password: password
            }),
    })
}