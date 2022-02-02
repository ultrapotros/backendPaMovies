
const express = require('express');
const data = require('./data');
const app = express()
const port = 3001
/* console.log(data);
app.get('/squad', (req, res) => { res.send(data.squadName); console.log(data.squadName)})
app.patch('/squad', (req, res) => { res.send(data.squadName) })
app.get('/members', (req, res) => { data.members.map((element, index) => res.send(element.name) )})
app.post('/members', (req, res) => { res.send(data.members) }) */
app.use(express.json()) 
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
    });
app.get('/member/:id', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
    });
app.post('/members', (req, res) => {

     /*  req.body */      /*  esto es el body del post, en raw y en json */
    data.members.push(req.body);
    console.log(data.members);
    console.log(req.params);
    res.status(201).json( data.members /* + "incluiremos a " + newMember */ );
    });
app.patch('/squad', (req, res) => {
    console.log('Squad new name= Super Hero Band');
    res.status(200).json({ message: 'New Squad Name' });
    });
app.get('/squad', (req, res) => {
        console.log('squad');
    res.status(200).json( data.members);
    });
app.get('/user/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next route
  if (req.params.id == 0) next('route');
  // otherwise pass the control to the next middleware function in this stack
  else next(); //
}, function (req, res, next) {
  // render a regular page
  res.render('regular');
});
      
// handler for the /user/:id path, which renders a special page
app.get('/user/:id', function (req, res, next) {
  res.render('special');
});
app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})


/* GET Squad - /squad
PATCH Squad - /squad
GET members -/members
GET member -/members/<id>
POST members -/members
PATCH member -members/<id>
DELETE member -/members/<id> ( */