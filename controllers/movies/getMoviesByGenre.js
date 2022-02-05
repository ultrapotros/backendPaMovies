const data = require('../../dataAllMovies.json');
const Movies = require('../../models/movies.js')
function getMovie(req, res){
    let movies = new Movies ();
    let result = movies.getMoviesByGenre(req.params.id)
    res.status(200).json(result);
    }
module.exports = getMovie;