const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name:  {
        type: String,
        required: true
    },
    position:  {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('posts', postSchema)