module.exports = CriarMensagem = (de, msg) => {
    return {
        de,
        msg,
        hr: new Date().getTime()
    }
}
