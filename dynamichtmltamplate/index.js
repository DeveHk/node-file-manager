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
app.get('/random',(req,res)=>{
    const num=Math.floor(Math.random()*10+2)
    res.render('random.ejs',{num:num})
})
app.get('/random/eo',(req,res)=>{
    const num=Math.floor(Math.random()*10+2)
    res.render('codnitionalrender.ejs',{num:num})
})
app.get('/r/:sub',(req,res)=>{
    const {sub}=req.params
    res.render('subredit.ejs',{subredit:sub})
})
app.get('/list/:sub',(req,res)=>{
    const {sub}=req.params
    const list=['billy','docker','bells','mojosit']
    res.render('looprender.ejs',{lof:sub,list})
})

app.get('/page/:sub',(req,res)=>{
    const dataitem=data[req.params['sub']]
    if(dataitem){
    res.render('page.ejs',{...dataitem,title:req.params})
    console.log(dataitem)
    }
    else {res.send("<h1> no reddit found </h1>")}
})