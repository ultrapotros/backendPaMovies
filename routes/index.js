var router = require('express').Router();
router.use('/movies', require('./movies'));
router.use('/genres', require('./genres'));
router.use('/person', require('./person'));
router.use('/news', require('./news'));
module.exports = router;
