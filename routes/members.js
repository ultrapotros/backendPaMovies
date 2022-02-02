var router = require('express').Router();
router.get('/', require('../controllers/members/getMembers')); 
router.get('/:id', require('../controllers/members/getMember')); 
router.post('/', require('../controllers/members/postMember')); 
router.patch('/:id', require('../controllers/members/patchMember')); 
router.delete('/:id', require('../controllers/members/deleteMember')); 
module.exports = router;