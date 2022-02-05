const Movies = require('../../models/movies.js')
function getSimilar(req, res){
    let movies = new Movies ();
    let result = movies.getSimilar(req.params.id)
    res.status(200).json(result);
    }
module.exports = getSimilar;
