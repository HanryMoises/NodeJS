const express = require("express");
const app = express();
// serve para tratar oque vem do formulário
app.use(express.urlencoded({ extended: true }));

app.get("/home", (req, res) => {
    res.send("<h1>Olá mundo</h1>");
}).listen(3000, () => {
    console.log("Servidor iniciado")
})

// url :: req.params => recebe o parametro da url,podendo ser ou não obrigatorio
app.get("/req/:nome/:idade?", (req, res) => {
    res.send(req.params);
});

// url :: req.query => recebe o parametro da url pelo metodo get
app.get("/query", (req, res) => {
    console.log(req.query)
    res.send(req.query)
});

// formulário(POST) => recebe dados do formulário via post, (*necessário elemento da linha 8)
app.get("/form", (req, res) => {
    res.send('<form method="POST" action="/result_form">nome:<input type="text" name="name_user"><br><button>Okay</button>');
});
app.post("/result_form", (req, res) => {
    res.send(req.body)
    console.log("req: " + req.body.name_user)
})

//formulário(GET) => recebe dados do formulário via get da url
app.get("/form_get", (req, res) => {
    res.send('<form method="GET" action="/form_getResult">nome:<input type="text" name="nameGet"><br><button>Okay</button>');
});
app.get("/form_getResult", (req, res) => {
    res.send(req.query)
   console.log(req.query.nameGet)
});

