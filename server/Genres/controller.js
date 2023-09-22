const Genres = require('./Genres')


const getAllGenres = async(req, res) => {
    const data = await Genres.find()
    res.end({data})
}


module.exports = {getAllGenres}