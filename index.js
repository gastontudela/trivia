const express = require('express');
const mongose = require('mongoose');
mongoose.connect('mongose/localhost/trivia');

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('hola mundo');
});

app.listen(port);
app.set('viewengine','pug');
app.set('view','/.view');

res.render('index',{
  home:'true'
});
