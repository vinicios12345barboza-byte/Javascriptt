// 1 -  var, let e const
// var x = 10
// var y = 15

// if(y > 10){
//     var x = 5
//     console.log(x)
// }

// console.log(x)

// let a = 10
// let b = 15

// if(b > 10){
//     let a = 5
//     console.log(a)
// }
// console.log(a)

// function logName(){
//     const name = "Vinicios"
//     console.log(name)
// }
// const name = "Barboza"
// logName()
// console.log(name)

// // 2 - arrow functions
// const sum = function(a, b){
//     return a + b
// }

// const arrowSum = (a, b) => a + b;
// console.log(sum(5, 5))
// console.log(arrowSum(5, 1))

// const greeting = (name) =>{
//     if(name){
//         return `Hello, ${name}`
//     } else{
//         return `Hello, visitante`
//     }
// }

// console.log(greeting("Vinicios"));
// console.log(greeting());

// const user = {
//     name: "Vi",
//     sayUserName(){
//         setTimeout(function(){
//             console.log(this)
//             console.log(`Username: ${this.name}`)
//         }, 1000)
//     },
//     sayUserNameArrow(){
//         setTimeout(() =>{
//             console.log(this)
//             console.log(`Username: ${this.name}`)
//         }, 2000)
//     }
// }
// user.sayUserName()
// user.sayUserNameArrow()

// 3 - filter
const arr = [1, 2, 3 , 4, 5, 6]
const highNumbers = arr.filter(n =>{
    if(n >= 3){
        return n
    }
})
console.log(highNumbers)

const users = [
    {name: "Vinicios", profissao: "Backend"},
    {name: "Sarah", profissao: "Designer"},
    {name: "Bianco", profissao: "Devops"},
    {name: "Fiasco", profissao: "Backend"},
    {name: "Bianco", profissao: "Frontend"},
]
const apenasDevelops = users.filter(u => u.profissao === "Backend" || u.profissao === "Devops" || u.profissao === "Frontend")
console.log(apenasDevelops)

const mudarProfissao = users.map(mudar =>{
    const prof = {...mudar}

    if(prof.profissao === "Designer"){
        prof.profissao = "Frontend"
    }

    return prof;
})
console.log(mudarProfissao)
// 4 - map
const funcionarios = [
    {name: "Vinicios", salario: "3500", nivel: "Junior"},
    {name: "Sarah", salario: "2500"},
    {name: "Fiasco", salario: "5500", nivel: "Pleno"},
    {name: "Sla", salario: "33.500", nivel: "Senior"},
];
const comBonus = funcionarios.map(f => {
    let bonus = {...f,  bonus: 500}

    if(f.nivel === "Junior"){
        bonus.nivel = "Pleno"
        bonus.salario = "6500"
    }

    return bonus
})
console.log(comBonus)

// 5 - template literals
// const Usernamee = "ViniciosB"
// const age = 19

// console.log(`O nome do usuário é ${Usernamee} e ele tem ${age} anos.`)

// 6 - destructuring
const cars = ["Creta", "Nivus", "Civic"]
const [car1, car2, car3] = cars
console.log(car1, car3)

const productsDetails = {
    name: "Teclado",
    price: 150,
    category: "Periférico",
    color: "White"
}

const {name: teclado, price,category, color} = productsDetails;
console.log(`O nome do produto é ${teclado} do preço R$${price}. COR: ${color}`);



// 7 - spread operator
const a1 = [1, 2, 3]
const a2 = [4, 5 ,6]
const a3 = [...a1, ...a2]
console.log(a3)

const userOriginal = {
    nome: "PQP",
    cargo: "Fullstack"
}
const userAtualizado = {...userOriginal, nivel: "Pleno"}
console.log(userAtualizado)

const carName = {name: "Creta"}
const carBrand = {brand: "HYUNDAI"}
const otherInfos = {km:10000, price: 98000}

const car ={...carName, ...carBrand, ...otherInfos}
console.log(car)

// 8 - classes
class CarrinhoDeCompras{
    constructor(novoCliente){
        this.cliente = novoCliente;
        this.produtos = [];
    }

    addProduct(novoItem, precoItem){
        this.produtos.push({nome: novoItem, preco: precoItem})
        console.log(`${novoItem} adicionado ao carrinho de ${this.cliente}.`)
    }

    mostrarTotal(){
        const total = this.produtos.reduce((soma, item) => soma + item.preco, 0)

        console.log(`Valor total R$${total}`)
    }
}

const compras = new CarrinhoDeCompras("Vinicios")
compras.addProduct("Teclado 70% white", 260)
compras.addProduct("Mouse white", 50)
compras.mostrarTotal();
console.log(compras);


// 9 - heranças
class Pessoa{
    constructor(nome){
        this.nome = nome
    }
}

class Desenvolvedor extends Pessoa{
    constructor(nome, linguagem){
        super(nome);
        this.linguagem = linguagem
    }

    falar(){
        console.log(`Meu nome é ${this.nome} e eu desenvolvo em ${this.linguagem}`)
    }
}
const dev = new Desenvolvedor("Vinicios", "Java")
console.log(dev.nome)
console.log(dev.linguagem)
dev.falar();

function verificarIdade(age){
   return new Promise((resolve, reject) =>{
   const idade = (age >= 18) ? "Pode votar" : "Não pode votar"

   resolve(idade)
   })
}

const verifict = verificarIdade(18)
const verifict2 = verificarIdade(16)

async function verifcar() {
    try{
        const verifict = await verificarIdade(18)
        console.log(`Processando.. ${verifict}`);

        const verifict2  =await verificarIdade(16)
        console.log(`Processando... ${verifict2} `)
    }catch(error){
        console.log(`Ih, deu erro! ${error}`)
    }
}

verifcar()