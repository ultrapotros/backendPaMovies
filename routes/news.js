var router = require('express').Router();
router.get('/', require('../controllers/news/getNews')); 
/* router.patch('/', require('../controllers/news/patch'));  */
module.exports = router;