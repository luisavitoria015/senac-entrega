// DEFINICOES BASICAS
 let continuar = true
 const dados = []
 
 

 // funcao para cadastro
function cadastrar() {
    const informacao = {
        Nome: prompt("qual o nome do abrigo?"),
        Endereco: prompt("qual e o endereco?"),
        Cidade: prompt("qual e sua cidade?"),
        Telefone: prompt("qual e o seu numero de telefone?"),
        Capacidade: prompt("qual e a capacidade do local?")
    }
    console.log(`Nome:${informacao.Nome}, Endereco:${informacao.Endereco}, Telefone:${informacao.Telefone}, Capacidade:${informacao.Capacidade}`)
        dados.push(informacao)
}

// Funcao para listar
function listar() {
    console.log("Função De Lista")
    
console.log(" CÓDIGOS  | NOMES | ENDEREÇOS | TELEFONES | CIDADE |  CAPACIDADE DE LOTAÇÃO ")

    for (const [ indice, objeto ] of dados.entries()) {
        console.log ( `${indice + 1} ╎ ${objeto.Nome} ╎ ${objeto.Endereco} ╎ ${objeto.Telefone} ╎ ${objeto.Cidade} ╎ ${objeto.Capacidade}` )
    }
    console.log(`Dados listados com sucesso! ${dados.length} Dados encontrados.`)
    console.log ("--------------------------")
}



//Funcao Para Buscar
function buscar() {
    const busca = {
        cidade: prompt("qual sua cidade?")
    }
    console.log(`Cidade de Busca: ${busca.cidade}`)
    for (const casa of dados) {
        if (casa.Endereco === busca){
       console.log(`Procurar Abrigos: Nome: ${casa.Nome}, Endereco: ${casa.endereco}, Telefone: ${casa.telefone}, Capacidade do Abrigo: ${casa.capacidade}`)
    }
    }
}





// Função para sair
function sair() {
    continuar = false
console.log("Tchau! Para reiniciar, atualize a aba do navegador.")
}


// Loop 
while (continuar) {

    // Formatar pergunta
    let pergunta  = "ABRIGOS TEMPORARIOS\n"
        pergunta += "-----------------------\n"
        pergunta += "Escolha Uma Opção:\n"
        pergunta += "1.Cadastrar abrigo\n"
        pergunta += "2.Listar abrigos\n"
        pergunta += "3.Procurar abrigo\n"
        pergunta += "0.Sair"


    // Guardar resposta
    let resposta = Number(prompt(pergunta))


    // Identificar resposta e chamar função
    switch (resposta) {
        case 1:
            cadastrar()
            break
        case 2:
            listar()
            break
        case 3:
            buscar()
            break
        case 0:
            sair()
            break
}}






























