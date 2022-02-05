var router = require('express').Router();
router.get('/upcoming', require('../controllers/movies/getUpcoming')); 
router.get('/details/:id', require('../controllers/movies/getMovie')); 
router.get('/similar/:id', require('../controllers/movies/getSimilar')); 
router.get('/genre/:id', require('../controllers/movies/getMoviesByGenre')); 
router.get('/search/:string', require('../controllers/movies/getSearch')); 
router.get('/movieCredits/:id', require('../controllers/movies/getMovieCredits')); 
module.exports = router;