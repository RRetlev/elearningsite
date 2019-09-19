export function fetchQuestion() {
    return fetch('http://localhost:8080/question')
        .then(response => response.json());
}

export function fetchUser() {
    return fetch('http://localhost:8080/auth/signin')
        .then(response => response.json())
}


export async function postUserRegistration(username, password) {
    const rawResponse = await fetch('http://localhost:8080/???', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            {
                username: username,
                password: password,
            })
    });

}

export function postUserLogin(username, password) {
    return fetch('http://localhost:8080/auth/signin', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                username: username,
                password: password
            }),
    }).then(response => console.log("response:  " + response));
    // const content = await rawResponse.json();
    // console.log("content:  " + content);

}