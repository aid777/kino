const mongoose = require('mongoose')

const CountrySchema = new mongoose.Schema({
    name: String,
    key: String,
})

module.exports = mongoose.model('country', CountrySchema)