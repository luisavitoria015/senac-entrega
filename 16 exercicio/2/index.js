const turno = prompt('em qual turno voce estuda M para matutino, V para vespertino e N para noturno').
toUpperCase()

if (turno === "M") {
    console.log("bom dia")
}
else if (turno === "V") {
    console.log("Boa tarde") }
        else if (turno === "N") {
            console.log("boa noite")
        }
        else {
            console.log("boa aula")
        }


        