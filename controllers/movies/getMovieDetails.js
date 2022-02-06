const Movies = require('../../models/movies.js')
function getMovie(req, res){
    let movies = new Movies ();
    let result = movies.getMovieDetails(req.params.id);
    if (result) {
        res.status(200).json(result);
    }
    else {
        res.status(404).json('File not found');
    }
    }
module.exports = getMovie;

