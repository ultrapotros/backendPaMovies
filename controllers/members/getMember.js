const data = require('../../data.json');
function getMember(req, res){
    let memberWanted = data.members.filter(((member)=> member.id === parseInt(req.params.id)));
    res.status(200).json( memberWanted[0]);
    }
module.exports = getMember;