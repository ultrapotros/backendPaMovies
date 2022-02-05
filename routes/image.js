var router = require('express').Router();
router.get('/:id', require('../controllers/image/getImage')); 
module.exports = router;