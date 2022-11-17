"use strict"
const socket = io();
let globalButton = document.getElementById("submit");

console.log("console");

socket.emit("start", "startSocket");

globalButton.onclick = function(event) {
    alert("Submit button is clicked!");
    socket.emit("chatting", "addNum");
}


socket.on("chatting",(data)=>{
    console.log(data);
    globalButton.innerText = data;
});



