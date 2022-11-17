const express = require("express");
const http = require("http");
const app = express();
const path = require("path");
const server = http.createServer(app);
const socketIo = require("socket.io");

var cnt = 0;

const io = socketIo(server);
app.use(express.static(path.join(__dirname, "src")));

const PORT = process.env.PORT || 5555;

io.on("connection",(socket)=>{
    console.log("connected");
    socket.on("chatting",(data)=>{
        console.log(data);
        cnt++;
        console.log(cnt);
        io.emit("chatting", cnt);
    })
    socket.on("start",(data)=>{
        console.log(data);
    })
})


server.listen(PORT, ()=> console.log('running'));