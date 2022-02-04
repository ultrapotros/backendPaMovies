var router = require('express').Router();
router.get('/', require('../controllers/members/getUpcoming')); 
router.get('/:id', require('../controllers/members/getMovie')); 
router.post('/', require('../controllers/members/postMember')); 
router.patch('/:id', require('../controllers/members/patchMember')); 
router.delete('/:id', require('../controllers/members/getSearch')); 
module.exports = router;