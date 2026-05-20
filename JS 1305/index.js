const filesis = require('fs');

//Ex de codigo Node

const nome = "Helton Azevedo";

console.log("Seja Bem-Vindo", nome);

filesis.writeFile('aula07.txt', 'Esse arquivo foi gerado usando node.js', 
    (err) => {
    if(err) throw err;
    console.log(' Arquvo criado com sucesso.')
})

filesis.readFile('Aula07-externo.txt', 'utf8' ,(err, data)=>{
    if (err) throw err;
    console.log(data)
})