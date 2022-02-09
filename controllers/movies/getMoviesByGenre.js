const Movies = require('../../models/movies.js');
const checkData= require('../../middlewares/checkData');
function getMovie(req, res){
    let movies = new Movies ();
    let result = movies.getMoviesByGenre(req.params.id);
    const [respuesta, resultChecked] = checkData(result);
    res.status(respuesta).json(resultChecked);
    }
module.exports = getMovie;