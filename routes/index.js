var router = require('express').Router();
router.use('/members', require('./members'));
router.use('/squad', require('./squad'));
module.exports = router;
