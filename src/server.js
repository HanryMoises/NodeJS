
const express = require('express');
const app = express();
const path = require('path')

const CriarMensagem = require('./msg');

// socket.io
const server = require('http').createServer(app);
const socketio = require('socket.io');
const io = socketio(server);


// middlewares
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../public/views'));
app.use(express.static(path.join(__dirname,"../public")));
app.use(express.urlencoded({ extended: true }));


// rotas
app.get('/', (req, res) => {
  res.render("index")
}); 

app.get('/chat', (req, res) => {
  
  const data = {
    usuario:req.query.usuario,
    sala:req.query.sala
  }
  res.render("chat",data)

}); 
app.use((req, res) => {
  res.send('<h1>Página não encontrada</h1>');
});



// usuário conectado
io.on('connection', (socket) => {
  console.log('Novo usuário Conectado')

  // envio de mensagem para todos usuário
  socket.emit('NovaMensagem', {
    de: 'Sistema',
    msg: 'Bem-vindo(-a) ao Sistema!'
  })

  //cria novas mensagem 
  socket.on('CriarMensagem', (mensagem) => {
    console.log(mensagem)

    // servidor enviar nova mensagem
    io.emit('NovaMensagem',CriarMensagem(mensagem.de,mensagem.msg));

  })

  //  usuário desconectado
  socket.on('disconnect', () => {
    console.log('Servidor: Usuário desconectado')
  })

})

// servidor
server.listen(3000, () => {
  console.log(`Servidor ouvindo na porta 3000`);
});



