const router = require('express').Router()
let Image = require('../models/image.model')

router.route('/').get((req, res)=>{
    Image.find()
    .then(images => res.json(images))
    .catch(err => res.status(400).json('error: + err'))
})

router.route('/add').post((req,res)=>{
    const username = req.body.username
    const fileName = req.body.fileName

    const newImage = new Image({
        username,
        fileName
    })

    newImage.save()
    .then(()=> res.json('User added!'))
    .catch((err)=> res.status(400).json('error: '+ err))
})

module.exports = router