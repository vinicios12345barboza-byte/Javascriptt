// requisição 
api.interceptors.request.use( config =>{
    console.log("Antes da requisição..")
    return config;
});


// resposta
api.interceptors.response.use( response =>{
    console.log("Resposta recebida.")
    return response;
});
