const express = require('express');
const app = express();

const path = require('path');

//Set our Views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//our Routing
const routes = require('./routes.js');
app.use('/', routes);

//Start our Server
app.listen(process.env.PORT || 3000, port => console.log(`Listening on port ${port}`));