$(() => {
    // se conecta ao servidor
    var socket = io('');

    // usuário conectado
    socket.on('connect', () => {
        console.log('Client: Usuário Conectado');

    })

    // Usuário desconectado
    socket.on('desconnect', () => {
        console.log('Client: Usuário desconectado')
    })
 
    // busca por novas mensagens no servidor
    socket.on('NovaMensagem', (msg) => {
        console.log(msg)
    })




})