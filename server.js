const express = require('express')
const mongoose = require('mongoose')

const users = require('./routes/api/users')

const app = express()

app.use(express.json())

const uri = 'mongodb+srv://markdreed512:SilkBeer@cluster0-vtv3p.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log("mongoDB connected...")
    })
    .catch((err)=>{
        console.log(err)
    })

app.use('/api/users', users)

app.get('/', (req, res)=>{
    res.send("yep")
})

const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`listening on port 5000...`)
})