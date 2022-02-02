const data = require('../../data.json');
function getSquad(req, res){
    res.status(200).json( data.squadName );
    }
module.exports = getSquad;