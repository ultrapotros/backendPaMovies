const data = require('../../data.json');
function deleteMember(req, res){
    let newArray = [];
    data.members.map(((member)=> member.id !== parseInt(req.params.id)? newArray.push(member):null));
    res.status(200).json( newArray );
    }
module.exports = deleteMember;

