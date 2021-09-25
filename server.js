const express = require("express")
const app =express()

const path = require("path") 

// app.use("/dist/", express.static(__dirname+"/dist/"))
app.get("/", (request,response) =>{
    response.sendFile(path.join(__dirname+"/index.html"))
})
app.listen(5000)

process.on("exit", shutdown)
process.on("SIGINT", shutdown)

function shutdown(){
    process.exit();
}