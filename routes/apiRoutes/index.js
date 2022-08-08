const router = require('express').Router();
const notesRoutes = require('./note-routes');

router.use(notesRoutes);

module.exports = router;