var app = require('express')();
app.use(require('express').json());
app.use('/api', require('./routes'));
app.listen(3000, () => {
console.log('Working!!!')
});