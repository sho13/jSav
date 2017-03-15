const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 6060;

app.use(express.static(path.join(__dirname, '/../client/')));
app.use(express.static(path.join(__dirname, '/../node_modules')));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, '/../client/dancefloor.html'));
});

app.listen(port, (err) => {
  if(err) {
    console.log('Error occurred: ', err);
  }
  console.log('Server is listening to port : ', port);
})
