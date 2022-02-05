const data = require('../../data.json');
function patchSquad(req, res){
    let squadChanges = Object.values(req.body);
    let squad = Object.values(data);
    let newSquad =[];
    squad.forEach((a, index) => a === squadChanges[index]? newSquad.push(a) : newSquad.push(squadChanges[index]));
    res.status(200).json( newSquad );
    }
module.exports = patchSquad;