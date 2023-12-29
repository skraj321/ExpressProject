const express=require("express");
const path=require("path");
const app=express();
const port=5000;


const staticPage=path.join(__dirname,"../partials");

app.set("view engine","ejs")

app.use(express.static(staticPage));


app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.get("/About",(req,res)=>{
    res.render("about.ejs");
});

app.get("/Weather",(req,res)=>{
    res.render("weather.ejs");
});

app.get("*",(req,res)=>{
    res.render("404Error.ejs",{
        errormsg: "Opps! page not found"
    });
});

app.listen(port,()=>{
    console.log(`listening to port no ${port}`);
})