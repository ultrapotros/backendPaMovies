const Movies = require('../../models/movies.js')
function getNext(req, res){
    let movies = new Movies ();
    let result = movies.getUpcoming ();
    res.status(200).json(result);
    }
module.exports = getNext;