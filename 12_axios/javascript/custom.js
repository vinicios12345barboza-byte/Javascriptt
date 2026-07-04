const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers:{
        authorization: "V23TOKEN"
    }
})