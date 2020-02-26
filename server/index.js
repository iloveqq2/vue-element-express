const express = require('express')
const app = express()

app.use(require('cors')())
app.use(express.json())

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/element-admin',{
    useNewUrlParser:true,
    useFindAndModify:true,
    useCreateIndex:true,
})
const Aticle = mongoose.model('Article',new mongoose.Schema({
    title:{type:String},
    content:{type:String},
}))

app.get('/',(req,res) => {
    res.send('index')
})

// 新增文章
app.post('/api/articles', async(req,res)=>{
    const article = await Aticle.create(req.body)
    res.send(article)
})

// 文章列表
app.get('/api/articles', async(req,res)=>{
    const article = await Aticle.find()
    res.send(article)
})

// 删除文章
app.delete('/api/articles/:id', async(req,res)=>{
    await Aticle.findByIdAndDelete(req.params.id)
    res.send({status:true})
})

// 根据id查询
app.get('/api/articles/:id', async(req,res)=>{
    let data = await Aticle.findById(req.params.id)
    res.send(data)
})

// 根据id修改
app.put('/api/articles/:id', async(req,res)=>{
    let data = await Aticle.findByIdAndUpdate(req.params.id,req.body)
    res.send(data)
})

app.listen(3001,()=>{
    console.log('http://localhost:3001/')
})