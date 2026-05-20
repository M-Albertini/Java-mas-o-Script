//No arquivo Json trocamos o nome do arquivo para quando rodar o npm run dev (esse dev tem o valor informado aqui)

//Importando o pacote HTTP
const http = require('http');

const server = http.createServer((req, res) => {// createServer é a função que cria o servidor
 //req é o que vem do cliente na view. É a requisição
    res.setHeader('Content-Type', 'text/html; charset = utf-8') 

    if (req.url ==='/'){

        res.end('<html><head><title>Bem Vindo</title></head><body><h1>Seja bem vindo ao Site XPTO"</h1></body></html>')
        // no "res" no começo é o que faz a resposda do que é recebido da requisição 

    }else if(req.url ==='/cliente'){
        res.end('<h2>Cadastro de cliente</h2>')

    }else{

        res.statusCode = 404;
        res.end('<h1>Página não encontro</h1>')
    }

});

const PORT = 3000;

server.listen(PORT, 'localhost', ()=> {
    console.log(`Servidor rodando na porta ${PORT}`);
})
