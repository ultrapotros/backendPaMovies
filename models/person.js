const data = require('../dataBirthdays.json');
class Person {
getBirthdays() {
    let aleatoryArray = [];
    aleatoryArray.push(Math.floor(Math.random() * data.length));
    let counter = 1;
    while(counter < 5) {
        let aleatorio = Math.floor(Math.random() * data.length);
        !aleatoryArray.includes(aleatorio)? (aleatoryArray.push(aleatorio), counter++) : null;
    }
    let birthdays = data.filter((member,index)=> aleatoryArray.includes(index));
    let results = [];
    birthdays.map((member)=> results.push({profile_path: member.profile_path, name: member.name, dob: member.dob}))
    return results;
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
getDetails(id){
    let person = data.filter(((member)=> member.celebId === id));
    console.log(person);
    let preciseData = [{name:person[0].name},{biography:person[0].biography},{profile_path: person[0].profile_path},{
        birthday: person[0].dob},{place_of_birth: person[0].place_of_birth}] ;
    return (preciseData);
    }
}
module.exports = Person;