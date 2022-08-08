// importing our depencies and needed modules as global variables 
const router = require('express').Router();
const { findNoteID, newNote, validateNotes } = require('../../lib/Note');
const notes = require('../../db/db.json');

router.get('/Note', (req, res) => {
    res.json(notes);
});

router.get('/Note/:id', (req, res) => {
    const result = findNoteID(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

router.post('/Note', (req, res) => {
    req.body.id = notes.length.toString();
    if (!validateNotes(req.body)) {
        res.status(400).send("This note isn't formatted correctly!");
    } else {
        const note = newNote(req.body, notes);
        res.json(note);
    }
});

module.exports = router;