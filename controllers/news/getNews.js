const News = require('../../models/news.js')
function getNews(req, res){
    let news = new News ();
    let result = news.getNews()
    res.status(200).json(result);
    }
module.exports = getNews;