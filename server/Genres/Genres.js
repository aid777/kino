const mongoose = require('mongoose')

const GenreSchema = new mongoose.Schema({
    name: String,
    key: String,
})

module.exports = mongoose.model('genre', GenreSchema)