const express = require('express')
const router = express.Router()

const User = require('../../models/User')

router.get('/', () => {
    User.find()
        .sort({date: -1})
        .then(users =>{

        })
})

router.post('/add', (req,res) => {
    const newUser = new User({
        username: req.body.username
    })
    newUser.save()
        .then(user => {
            res.send("hi there!")
        })
})


module.exports = router