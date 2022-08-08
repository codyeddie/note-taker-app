const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// this will have express use the html and api routes 
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// create the server port 
app.listen(PORT, () => {
  console.log(`Now listening at ${PORT}!`);
});