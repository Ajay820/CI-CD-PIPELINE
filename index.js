let express = require("express")

let app = express()

app.get("/",(req,res)=>{
    res.send("this is home page")
})

app.get("/signup",(req,res)=>{
    res.send("this is signup page")
})

app.get("/logout",(req,res)=>{
    res.send("this is logout file")
})

app.listen(4000,()=>{
    console.log("server is running at port 4000")
})
