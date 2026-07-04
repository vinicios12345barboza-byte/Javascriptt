// 1 - instalação
console.log(axios);

// 2 - primeiro request
const getData = async() =>{


    try{
        const response = await api.get("/users",
            //4 - definindo headers
            {
                headers:{
                    "Content-Type": "application/json",
                    custom: "header",
                },
            }
    )
        console.log(response)

        return response.data;
    }catch(error){
        console.log(error)
    }
}
getData();


// 3 - exibindo dados na tela
const container = document.querySelector("#user-container")
const printData = async() =>{
    const data = await getData()

    console.log(data)
    data.forEach(user => {
        const div = document.createElement("div")
        const elementName = document.createElement("h2")
        elementName.textContent = user.name
        div.appendChild(elementName)

        const elementEmail = document.createElement("p")
        elementEmail.textContent = user.email 
        div.appendChild(elementEmail)

        const userName = document.createElement("p")
        userName.textContent = user.username 
        div.appendChild(userName)

        container.appendChild(div)
    });
}
printData();

// 5 - form(post)
const form = document.querySelector("#post-form")
const tituleInput = document.querySelector("#title")
const bodyInput= document.querySelector("#body")

form.addEventListener("submit", (e) =>{
    e.preventDefault()

    api.post("/posts", {
       title: tituleInput.value, 
       body: bodyInput.value, 
       userrId: 1,
    });
});






