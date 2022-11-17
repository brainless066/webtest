"use strict"
const socket = io();

console.log("console");

socket.emit("chatting", "from front");

document.getElementById("submit").onclick = function(event) {
    alert("Submit button is clicked!");
    socket.emit("chatting", "addNum");
}



socket.on("chatting",(data)=>{
    console.log(data);
});


