var router = require('express').Router();
router.get('/', require('../controllers/news/getNews')); 
module.exports = router;