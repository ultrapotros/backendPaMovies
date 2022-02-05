var router = require('express').Router();
router.get('/birthdays', require('../controllers/person/getBirthdays')); 
router.get('/details/:id', require('../controllers/person/getDetails')); 
router.get('/crew/:id', require('../controllers/person/getCrew')); 
module.exports = router;