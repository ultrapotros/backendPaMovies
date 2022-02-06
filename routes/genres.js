var router = require('express').Router();
router.get('/', require('../controllers/genres/getList')); 
module.exports = router;