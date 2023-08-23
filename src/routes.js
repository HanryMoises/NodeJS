const express = require("express");
const Enviaremail = require("./controller/sendemail")
const routes = express.Router();


// rotas
routes.get("/enviaremail/:texto?/:assunto:?/:to?", (req, res) => {
    // console.log(req.params)
    const { texto, assunto, to } = req.params;


    if (!texto || !assunto || !to) {
        return res.redirect("/");

    }
    if (Enviaremail(texto, assunto, to)) {
        return res.send("Email enviado")

    }

});

routes.get("/", (req, res) => {
    return res.send("página indisponível");
})

module.exports = routes;
