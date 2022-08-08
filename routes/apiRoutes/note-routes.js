const router = require('express').Router();
const notes = require('../../db/db.json');
const { findNoteID, newNote, noteCheck, deleteNote } = require('../../lib/notes');

// this gets all notes 
router.get('/notes', (req, res) => {
    res.json(notes);
});

// this gets a single note
router.get('/notes/:id', (req, res) => {
    const result = findNoteID(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

// this gets a new note 
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    if (!noteCheck(req.body)) {
        res.status(400).send('You must enter the note correctly!');
    } else {
        const note = newNote(req.body, notes);
        res.json(note);
    }
});

// this route will delete a note 
router.delete('/notes/:id', (req, res) => {
    const result = deleteNote(req.params.id, notes);
    if (!result) {
        res.send(404).send('Note not found');
    }
    res.sendStatus(204);
});

module.exports = router;