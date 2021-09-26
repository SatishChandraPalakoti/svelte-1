const express = require("express")
const app =express()

const path = require("path") 

app.use("/", express.static(__dirname+"/dist"))
// app.use("/",express.static('dist'))

app.get("/", express.static(__dirname),(request,response) =>{
    let x = path.join(__dirname)
    console.log("Value of x is", x);
    response.sendFile(path.join(__dirname+"/index.html"))
})
app.listen(5000)

process.on("exit", shutdown)
process.on("SIGINT", shutdown)

function shutdown(){
    process.exit();
}