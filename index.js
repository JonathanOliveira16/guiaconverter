const fs = require("fs")

//ler arquivo
// fs.readFile("./teste.txt", {encoding: 'utf-8'},(erro,dados)=>{
//     if(erro){
//         console.log("ocorreu uma falha: " + erro)
//     }else{
//         console.log(dados)
//     }  

// })

//escrever arquivo
// fs.writeFile("./teste.txt", " escreveu mesmo", (err)=>{
//     if(err){
//         console.log("eror: " + err)
//     }
// })

fs.readFile("./usuario.json", {encoding:'utf-8'}, (err, dados)=>{
    if(err){
        console.log("err: " + err)
    }else{
        var conteudo = JSON.parse(dados)
        console.log(conteudo)
        conteudo.nome = "pirnha"
        fs.writeFile("./usuario.json", JSON.stringify(conteudo), (erro)=>{
            if(erro){
               console.log("err") 
            }
        })
    }
})