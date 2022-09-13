const express = require('express');
const {Server}=require('socket.io');
const {createServer}=require('http')


const app= express();
const httpServer=createServer(app);
const io=new Server(httpServer);


const port = process.env.PORT || 3000;
console.log(port)
io.on("connection", (socket) => {
    console.log(socket.id)
});

app.get('/',(req,res)=>{res.send("hello")})

httpServer.listen(port);
