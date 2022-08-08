// importing our depencies and needed modules as global variables 
const router = require('express').Router();
const { findNoteID, newNote, validateNotes } = require('../../lib/notes');
const notes = require('../../db/db.json');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.get('/notes/:id', (req, res) => {
    const result = findNoteID(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();
    if (!validateNotes(req.body)) {
        res.status(400).send('Note is not properly formatted.');
    } else {
        const note = newNote(req.body, notes);
        res.json(note);
    }
});

module.exports = router;