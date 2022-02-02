const data = require('../../data.json');
function patchMember(req, res){
    let memberWanted = data.members.filter(((member)=> member.id === parseInt(req.params.id)));
    let memberChanges = Object.values(req.body);
    let aux = Object.values(memberWanted[0]);
    let newMember=[];
    aux.forEach((a, index)=> a === memberChanges[index]? newMember.push(a) : newMember.push(memberChanges[index]));
    res.status(200).json( newMember);
    }
module.exports = patchMember;