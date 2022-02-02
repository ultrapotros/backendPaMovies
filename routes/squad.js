var router = require('express').Router();
router.get('/', require('../controllers/squad/get')); 
router.patch('/', require('../controllers/squad/patch')); 
module.exports = router;