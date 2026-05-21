const express = require("express");//Importa para o projeto o pacote express
const app = express(); //Instanciando/Inicializando o Expresss
const port = 3000;

//Middleware para processar o corpo da requisição
app.use(express.urlencoded({extend: true}));
app.use(express.json());


//Rotas da aplicação
app.get(`/`,(req,res) => {
    console.log("Requisição tipo GET realizada na rota /" + port);
    res.send("<h1>Bem vindo ao sistema XPTO </h1>")
})

app.get("/cadastrocliente", (req,res) =>{
    console.log("REquisição GET na rota de /cadastrocliente");
    res.send(res.send("<h1> Cadastro de cliente </h1>"))


} );

app.get(`/buscar`, (req,res) => {
    const termoDeBusca = req.query.termo;
    if(termoDeBusca){
        console.log("Parametro usado na query: "+ termoDeBusca)//exibe no promp o parametro usado
        res.send(`<h1>Voce pesquisou por ${termoDeBusca} </h1>`) //Devolve isso como resposta

    }else{
        res.send(`<h1> Você não digitou um termo de busca valido </h1>`)
    }
});

app.get(`/login`, (req,res) => {
    const pLogin = req.query.login;
    const pSenha = req.query.senha;

    //Não deve fazer assim
    if (pLogin === 'Matheus' && psenha === '12345'){
        res.send(`<h1>Bem vindo ${pLogin}`);
    }else{
        res.send("Usuario ou senha incorreta!") ;
    }
    //res.send("Usuario ou senha incorreta!") ;// Precisa estar dentro do else, caso contrario o sistema entende que acabou de mandar um send(dentro do if)

});
app.post(`/recebeform`, (req,res) =>{
    const dados = req.body;
    console.log("Dados vindo do formulario", dados);
    res.send("Dados enviados!");

});

app.post(`/login`, (req,res)=>{
    const {login, senha} = req.body;
    console.log(`Login: ${login}, Senha: ${senha}`);
    if(login =='matheus' && senha === '12345'){
        res.status(202)("<h1> Bem vindo ao sistema </h1><h4> Alex, o que vamos fazser hoje?</h4>");
    }else{
        res.status(401)("<h1>Login e/ou senha incorretos! </h1>");
    }
});

app.post(`/cadastraproduto`,(req,res )=>{
    const {codigo,nome,preco} =req.body;
    if(codigo && nome &&preco){
        res.status(202).send(`<h1> Produto Inserido"</h1><p>Codigo: ${codigo} |Nome: ${nome}| Preço: ${preco}</p>`)
    }else{
        res.status(400).send("<h1> Você não informou algum dos tres parametros</h1>");
    }
});

app.put("/editaonibus", (req,res)=>{
    const {numero, linha, lugares} = req.body;
    if(numero && linha && lugares){
        res.status(200).send(`<h1> Busao alterado!</h1><p>Numero: ${numero}| Linha: ${linha}| Lugares: ${lugares}</p>`);
    }else{
        res.status(400).send("<h1> alguma coisa</h1>");
    }
})



//ROTAS TEM QUE ESTAR ACIMA DO LISTEN
app.listen(port, ()=>{ //iniciando o servidor na porta 
    console.log(`Servidor rodando na porta ${port}`);
})
