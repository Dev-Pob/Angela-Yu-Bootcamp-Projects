import express from "express";
const app= express();
const port=3000;

app.get("/", (req, res)=>{
    res.send("<h1>BELLA A TUTTI RAGAZZI E BENVENUTI NELLA TERRA DEI PAGURI<h1>");
});

app.get("/totti", (req, res)=>{
    res.send("<h1>Oggi vi mostro le mie carte gradate da 50 euro<h1>");
});

app.listen( port, ()=>{
    console.log(`Stiamo viaggiando nella porta ${port}`);
});

