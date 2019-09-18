import React from 'react';

// export function fetchQuestion() {
//     return fetch('http://localhost:8080/question')
//         .then(response => {
//             if (response.ok) {
//                 return response.json();
//             } else {
//
//                 if (response.status === NO_RESPONSE_CODE) {
//                     // server unavailable
//                     console.log("hgjfkdl;s");
//                     return;
//                 }
//             }
//         })
//         .catch((error) => console.log(error));
// }

export async function fetchQuestion() {
    try {
        let response = await fetch('http://localhost:8080/question');
        return await response.json();
    } catch (e) {
        return e;
    }
}
//
// export const fetchRequest = async () => {
//     const response = await fetch('http://localhost:8080/question');
//     return await response.json();
// };

// request();

