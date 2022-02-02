const data = require('../../data.json');
function postMember(req, res){
    data.members.push(req.body);
    res.status(200).json(data.members);
    }
module.exports = postMember;