import express from "express";
const app = express();
//This creates a server running on our local host
const port = 3000;


app.listen(port, ()=>{
    console.log(`Server is running on Port: ${port}`);
})