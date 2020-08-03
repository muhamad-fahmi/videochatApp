const express = require('express');
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server)
const routes = require('./routes/routes');
const { Socket } = require('dgram');
const { disconnect } = require('process');

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use('/', routes)

io.on('connection', socket => {
    socket.on('join-room', (roomId, userId) => {
        console.log(roomId, userId)
        socket.join(roomId)
        socket.to(roomId).broadcast.emit('user-connected', userId)
        socket.on('disconnect', () => {
            socket.to(roomId).broadcast.emit('user-disconnected', userId)
        })
    })
})
server.listen(3000)