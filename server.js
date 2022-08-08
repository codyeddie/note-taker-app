// declare dependcies as global variables 
const express = require('express')
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// declare port variable 
const PORT = process.env.PORT || 3001

// declare app as express 
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// declare routes being used by express 
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Now listening at ${PORT}`);
})