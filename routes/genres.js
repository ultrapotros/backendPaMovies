var router = require('express').Router();
router.get('/', require('../controllers/genres/getList')); 
router.patch('/', require('../controllers/genres/patch')); 
module.exports = router;