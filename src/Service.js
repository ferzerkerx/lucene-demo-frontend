export const Service = (text) => {

    const checkStatus = (response) => {
        if (response.status >= 200 && response.status < 300) {
            return response
        }

        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    };

    const parseJSON = (response) => {
        return response.json()
    };

    const encodedQuery = encodeURIComponent(text);
    return fetch(`http://localhost:8080/books?keyword=${encodedQuery}`, {credentials: 'include'})
        .then(checkStatus)
        .then(parseJSON)
        .catch((error)  => console.log('request failed', error));
};