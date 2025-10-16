import express from "express";
const app = express();
//This creates a server running on our local host
const port = 3000;

app.get("/",(req,res) =>{
    res.send(
        "<h1>Hello!</h1>",
    )
})

app.get("/about", (req,res)=>{
    res.send(
        "<h1>About Us</h1><p>This is a quick paragraph about me</p>"
    )
})

app.listen(port, ()=>{
    console.log(`Server is running on Port: ${port}`);
})