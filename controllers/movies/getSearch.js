const Movies = require('../../models/movies.js')
function getSearch(req, res){
    let movies = new Movies ();
    let result = movies.getMovieList (req.params.string);
    res.status(200).json(result);
    }
module.exports = getSearch;

