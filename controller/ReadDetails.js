const axios = require('axios');
   
let getResponse = (endpoint) => {
    return new Promise((resolve, reject) => {
        
    axios
        .get(endpoint)
        .then(res => {
            resolve(res);
        })
        .catch(error => {
            reject(error);
        });
    })
}

async function fetchUrlPromise(endpoint){
    let response = await getResponse(endpoint);
    let array = [...response.data.data];
    return array;
}

module.exports = fetchUrlPromise;