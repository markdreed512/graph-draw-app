const express = require('express')
const router = express.Router()

const User = require('../../models/User')

router.get('/', (req, res) => {
    User.find()
        .sort({date: -1})
        .then(users =>{
            res.json(users)
        })
})

router.post('/add', (req,res) => {
    const newUser = new User({
        username: req.body.username,
        password1: req.body.password1,
        password2: req.body.password2
    })
    
    console.log(req.body.password1, req.body.password2)
    newUser.save()
        .then(user => {
            res.send("hi there!")
        })
})

router.delete('/:id', (req, res)=>{
    User.findById(req.params.id)
        .then(user => user.remove().then(()=>res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
})


module.exports = router