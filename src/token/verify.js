const jwt = require("jsonwebtoken");

// 
module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.redirect("/erro");
    }


    const dados = jwt.verify(authorization, "ualsdgvkni@1278sadovbl")
    if (!dados.nome || !dados.senha) {
        return res.redirect("/erro");
    }

    req.nome=dados.nome;
    req.senha=dados.senha
    return next();


}
