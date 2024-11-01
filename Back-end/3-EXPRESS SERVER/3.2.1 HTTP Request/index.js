import express from "express";
const app= express();
const port=3000;

app.get("/", (req, res)=>{
    res.send(`<a href="/contact"><button type="button">Contact</button></a><a href="/about"><button type="button ">About</button></a>`);
});

app.get("/contact", (req, res)=>{
    res.send(`3000000000000000000000`);
});

app.get("/about", (req, res)=>{
    res.send(`succhio cazzi`);
});

app.listen( port, ()=>{
    console.log(`Stiamo viaggiando nella porta ${port}`);
});