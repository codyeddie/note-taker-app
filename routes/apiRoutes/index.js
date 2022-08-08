// import express router and note routes
const router = require('express').Router();
const noteRoutes = require('../apiRoutes/note-routes');

// use note-routes module 
router.use(noteRoutes);

module.exports = router;