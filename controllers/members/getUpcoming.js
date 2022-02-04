const data = require('../../dataMoviesComplete.json');
const Movies = require('../../models/movies.js')
function getNext(req, res){
    let movies = new Movies ();
    let result = movies.getNextMovies ();
    res.status(200).json(result);
    }
module.exports = getNext;