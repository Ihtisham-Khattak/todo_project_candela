const app = require('express')()
const http = require('http').createServer(app)
// const io = require('socket.io')(http)
const PORT = process.env.PORT || 2500


// server-side
const io = require("socket.io")(http, {
    cors: {
        origin: "http://localhost:3000/",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});

io.on('connection', socket => {
    socket.on('message', ({chaterName, message}) => {
        io.emit('message', {chaterName, message})
    })
})

http.listen(PORT, 'localhost', () => {
    console.log(`Server is running on http://localhost:${PORT}/`)
})