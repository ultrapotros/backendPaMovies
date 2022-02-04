const data = require('../dataMoviesComplete.json');
class Movies {
getMovieList(string) {
    let movieList = [];
    data.map((movie)=> movie.title.includes(string)? 
    movieList.push({title: movie.title, id: movie.id, poster_path:movie.poster_path,vote_average:movie.vote_average}):null);
   /*  let movieList = data.filter((movie)=> movie.title.includes(string)); */
    let search = movieList.filter(((movie,index)=> index < 20));
    return search;
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
/*     let preciseData = [movieWanted[0].adult,movieWanted[0].title,movieWanted[0].poster_path,
        movieWanted[0].overview,movieWanted[0].production_companies,movieWanted[0].adult,movieWanted[0].video,
        movieWanted[0].release_date,movieWanted[0].production_countries] ; */
    return (movieWanted);
    }
}
module.exports = Movies;




/*     const country = {production_countries:[{
        iso_3166_1:"US",
        name:"United States of America"
        },
        {
        iso_3166_1:"US",
        name:"United States of America"
        }
        ]};
    const companies = {production_companies:[
        {
        id:420,
        logo_path:"/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
        name:"Marvel Studios",
        origin_country:"US"
        },
        {
        id:84041,
        logo_path:"/nw4kyc29QRpNtFbdsBHkRSFavvt.png",
        name:"Pascal Pictures",
        origin_country:"US"
        },
        {
        id:5,
        logo_path:"/71BqEFAF4V3qjjMPCpLuyJFB9A.png",
        name:"Columbia Pictures",
        origin_country:"US"
        }
        ]} */
    /* let newArray = data.results.map((member)=> Object.assign(member,country,companies)); */