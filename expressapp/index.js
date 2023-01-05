const express=require('express')
const app=express()
app.listen('3000',()=>{
    console.log('server started')
})


app.get('/cat',(req,res)=>{
    res.send("MEOW!!!")
})
app.get('/dog',(req,res)=>{
    res.send("WOAH!!")
})
app.get('/',(req,res)=>{
    res.send("no animat mentioned")
})
app.post('/',(req,res)=>{
    res.send("a post request created")
})
app.get('/r/:animal/:sounds',(req,res)=>{
    const {animal,sounds}=req.params
    res.send(`hello i'm a ${animal} and i sounds ${sounds}`)
})
app.get('/r',(req,res)=>{
    const {q}=req.query
    res.send(`hey sending back ${q}`)
})