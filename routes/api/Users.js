const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../../models/User')

router.get('/', (req, res) => {
    User.find()
        .sort({date: -1})
        .then(users =>{
            res.json(users)
        })
})

router.post('/add', async (req,res) => {
    try{
        const hashedPassword1 = await bcrypt.hash(req.body.password1, 10)
        const hashedPassword2 = await bcrypt.hash(req.body.password2, 10)
        const newUser = new User({
            username: req.body.username,
            password1: hashedPassword1,
            password2: hashedPassword2
        })
        newUser.save()
        .then(user => {
            res.send("hi there!")
        })
    } catch{
        res.status(500).send()
    }  
})

router.delete('/:id', (req, res)=>{
    User.findById(req.params.id)
        .then(user => user.remove().then(()=>res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
})


module.exports = router