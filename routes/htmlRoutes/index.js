// importing our dependcies as global variables
const path = require('path');
const router = require('express').Router();

// this route will open up the public folder 
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public'));
});

// this route will open up the notes.html file in the public folder 
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// this route will open up index.html file in public folder 
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// exporting this module 
module.exports = router;