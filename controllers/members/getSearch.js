const data = require('../../dataMoviesComplete.json');
const Movies = require('../../models/movies.js')
function getSearch(req, res){
    let movies = new Movies ();
    let result = movies.getMovieList (req.params.id);
    res.status(200).json(result);
    }
module.exports = getSearch;

