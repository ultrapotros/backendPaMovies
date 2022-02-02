
const data = require('../../data.json');
function getMembers(req, res){
    res.status(200).json( data.members );
    }
module.exports = getMembers;