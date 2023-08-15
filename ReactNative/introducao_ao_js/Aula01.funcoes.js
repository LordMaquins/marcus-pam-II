let n1 = 100;
let n2= 57;


//iniciando uma função
function soma(n1, n2){
    return n1 + n2
}



console.log(soma(87, 57))
console.log(soma(987, 57))
console.log(soma(100, 204))


//usando uma variavel para ter uma função
const divisao =(v1, v2) =>{
    let resultado = v1 / v2
    return console.log(resultado)
    
}
divisao(159, 456)

const expo =(b1, b2)=>{
    let result = b1 ** b2
    return console.log(result)
}
expo (8, 2)

//decisao sem else
const div =(v1, v2) =>{
    let msg= ""
    if (v1>v2){
    let resultado = v1 / v2
    msg = resultado
    return msg
}
msg = "Mlk não boto fé"
return msg

}
div(159, 456)