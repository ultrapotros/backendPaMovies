const data = require('../../dataGenres.json');
const Genres = require('../../models/genres.js')
function getList(req, res){
    let genres = new Genres ();
    let result = genres.getGenresList()
    res.status(200).json(result);
    }
module.exports = getList;