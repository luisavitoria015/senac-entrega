const generofilme = prompt("qualo genero do filme que voces asistirao"). toUpperCase()
const valoringresso = Number(prompt("qual e o preco dos ingressos"))
const valormaximo = 15


if ((generofilme ==="fantasia") && (valoringresso < valormaximo))  {
    console.log("bom filme")
}
else {
    console.log("escolha outro filme")
}


