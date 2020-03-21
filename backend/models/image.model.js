const mongoose = require('mongoose')

const Schema = mongoose.Schema

const imageSchema = new Schema({
    username: {type: String,required: true},
    fileName: {type: String, required: true}
    
})

const Image = mongoose.model('Image', imageSchema)

module.exports = Image