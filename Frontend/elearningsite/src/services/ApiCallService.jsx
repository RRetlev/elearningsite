
export function fetchQuestion() {
    return fetch('http://localhost:8080/question')
        .then(response => response.json());
}


