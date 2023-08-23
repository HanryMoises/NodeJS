const express = require("express");
const session = require("express-session");
const routes = require("./routes");
const app = express();


// middlewares
app.use(express.json());
app.use(session({
    secret: "asdasd@skfb21asdas345",
    resave: true,
    saveUninitialized: true
}));

app.use(routes);


// servidor
app.listen(3000, () => {
    console.log("Servidor aberto")
})
