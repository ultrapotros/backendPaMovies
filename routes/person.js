var router = require('express').Router();
router.get('/birthdays', require('../controllers/person/getBirthdays')); 
router.get('/details/:id', require('../controllers/person/getDetails')); 
module.exports = router;