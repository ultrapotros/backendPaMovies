const data = require('../dataNews.json');
class News {
getNews() {
    let news = [];
    data.map((member)=> news.push({link: member.link, media: member.media, published_date: member.published_date, title: member.title, summary: member.summary, clean_url: member.clean_url}))
    return news;
}
getNextMovies(){
    data.sort(function (a, b){
        return (b.release_date - a.release_date)
    })
    let nextMovies = data.filter(((member,index)=> index < 20));
    let nextMoviesData = [];
    nextMovies.map((member)=> nextMoviesData.push({poster_path: member.poster_path, release_date: member.release_date, title: member.title}))
    return (nextMoviesData);
}
getMovieDetails(id){
    let movieWanted = data.filter(((member)=> member.id === parseInt(id)));
    let preciseData = [{adult:movieWanted[0].adult},{title:movieWanted[0].title},{poster_path:movieWanted[0].poster_path},{
        overview: movieWanted[0].overview},{production_companies: movieWanted[0].production_companies},{video: movieWanted[0].video},{
        release_date: movieWanted[0].release_date},{production_countries: movieWanted[0].production_countries}] ;
    return (preciseData);
    }
}
module.exports = News;