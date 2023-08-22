const express = require("express");
const session = require("express-session");
const jwt = require("jsonwebtoken")
const routes = express.Router();
const verify = require("./token/verify")


routes.get("/login/:nome?/:senha?", (req, res) => {
    // 
    const { nome, senha } = req.params;
    const usuario_token = jwt.sign(
        { nome: nome, senha: senha },
        "ualsdgvkni@1278sadovbl",
        { expiresIn: "1d", algorithm: "HS256" }

    );
    // 
    if (!nome || !senha) {
        return res.redirect("/erro");
    }

    res.json(usuario_token);
    // res.json(req.session.usuario_token)
})

routes.get("/home", verify, (req, res) => {
    const usuario = {
        nome: req.nome,
        senha: req.senha
    }
    res.json(usuario)
})


routes.get("/erro", (req, res) => {
    res.send("usuário não está logado").status(501);
})

module.exports = routes;
