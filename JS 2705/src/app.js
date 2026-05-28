const express = require('express'); //Importando o express
const app = express();
const port =3000;

//Configurando nossos Middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.set(`view engine`, `ejs`);
//config opicional informando o lugar da pasta
app.set(`views`, `./src/views`);

//renderiza a pagina HTML/EJS diretamente
app.get(`/`, (req, res) =>{
    const NOMESISTEMA ="SysHelton";
    res.render(`index.`,{nome: NOMEDOSISTEMA});
} )

app.get(`/carros`,(req,res) =>{
    let cars =[
        {id: 1, marca:`GM`, modelo: `Corsa` },
        {id: 2, marca:`VW`, modelo: `Gol` },
        {id: 3, marca:`TOYOTA`, modelo: `Corolla` },
        {id: 4, marca:`VW`, modelo: `Limão8` },
        {id: 5, marca:`Renault`, modelo: `Duster` },
        {id: 6, marca:`Ferrari`, modelo: `712` }
    ]

res.render('list_carros',{listaCarros: cars});
})

app.get(`/motos`, (req,res) => {
    const MOTOS = [
        {id: 1, marca: `Honda`, modelo: `Titan`},
        {id: 2, marca: `Honda`, modelo: `Fan`},
        {id: 3, marca: `BMW`, modelo: `Titan`},
        {id: 4, marca: `Ducatti`, modelo: `Bix`}
    ]

    res.render('list_motos',{LISTA_DE_MOTOS: MOTOS});//Faz a pagina ser exibida
})

/*
//rota inicial 
//req é o que o cliente manda, res é a resposta que mandamos
app.get('/', (req, res ) => {
    res.send(`<h1> Bem vindo ao sistema XPTO</h1><h4> Seu sistema de informações aura farmada</h4> <p> Selecione o que você deseja fazer, no menu de integração</p>`)
});
*/

//Inicializando o servidor
app.listen(port, ( ) =>{
    console.log(`Servidor rodando na porta ${port}`);

});
