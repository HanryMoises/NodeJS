const express = require("express");
const session = require("express-session");
const app = express();
// const flash = require("connect-flash"); // chave & valor | valor = string

// middlewares
app.use(session({
    secret: "sadoaf@pçsdnasd12313asa234",  // A opção secret é usada para fornecer a chave secreta usada nesse processo de criptografia e assinatura. 

    resave: false, // A opção resave determina se a sessão será regravada no armazenamento durante cada solicitação

    saveUninitialized: true, // Essa opção controla se uma sessão será salva no armazenamento, mesmo que ela não tenha sido modificada durante a solicitação. 

    // o campo "cookie" abaixo é a configuração de como a sessão do servidor é lido e interpretado, diferente do cooki do navegador
    cookie: {
        secure: false, // Essa opção determina se o cookie só deve ser enviado por meio de conexões seguras(HTTPS). 

        httpOnly: true, // Essa opção controla se o cookie é acessível apenas via protocolo HTTP e não pode ser acessado por scripts do lado do cliente (JavaScript).

        maxAge: 60 , // Esta opção define a duração do cookie, especificada em milissegundos. Após esse período, o cookie expirará e a sessão será considerada inválida.

        sameSite: "strict", // Essa opção define como o cookie deve ser enviado em solicitações de origens diferentes. Pode ser configurado como "Strict", "Lax" ou "None" para controlar como o cookie é compartilhado entre diferentes origens.

    }

}));



// rotas
app.get("/", (req, res) => {
    // validar usuario e encaminha os dados com connect-flash para a proxima pagina
    req.session.usuario = { nome: "hanry", senha: "123" }
    res.send("dados criado, acesse outra rota")
})

app.get("/usuario", (req, res) => {
    const usuario = req.session.usuario || 'Usuário não encontrado na sessão';
    res.json(usuario);

})


// porta que rodará à aplicação 
app.listen(3000, () => {
    console.log("porta aberta")
})
