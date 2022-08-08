const path = require('path');
const router = require('express').Router();

// this gets the public folder 
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public'));
});

// this gets the notes.html
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// this gets the index.html file
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;