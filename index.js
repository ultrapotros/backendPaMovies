var app = require('express')();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use('/api', require('./routes'));
app.listen(3000, () => {
console.log('Working!!!')
});

