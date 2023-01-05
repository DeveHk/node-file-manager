const express = require('express')
const app=express()
const data =require('./data.json')

const path =require('path')
app.set('views',path.join(__dirname,'/views'))
app.set('view engine','ejs')

app.use(express.static(path.join(__dirname,'/public')))

app.listen('3000',()=>{
    console.log("server started")
})

app.get('/',(req,res)=>{
    res.render('home.ejs')
})

app.get('/page/:sub',(req,res)=>{
    const dataitem=data[req.params['sub']]
    if(dataitem){
    res.render('page.ejs',{...dataitem,title:req.params})
    console.log(dataitem)
    }
    else {res.send("<h1> no reddit found </h1>")}
})