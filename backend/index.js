const express=require('express')
const bodyParser=require('body-parser')
const app=express()
const PORT=process.env.PORT || 3000
const path=require('path')


app.use(path.join(__dirname+'/index.css'))
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/home.html'))
})



app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`)
})

