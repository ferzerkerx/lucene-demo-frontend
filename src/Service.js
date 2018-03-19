import {checkStatus, parseJSON} from './Utils'

export const Service = (text) => {
    const encodedQuery = encodeURIComponent(text);
    return fetch(`http://localhost:8080/books?keyword=${encodedQuery}`, {credentials: 'include'})
        .then(checkStatus)
        .then(parseJSON)
        .catch((error)  => console.error('request failed', error));
};