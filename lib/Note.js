const fs = require('fs');
const path = require('path');

const findNoteID = (id, notes) => {
    const result = notes.find(note => note.id === id);
    return result;
};

const newNote = (body, notesArray) => {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return note;
};

const noteCheck = (note) => {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    if (!note.id || typeof note.id !== 'string') {
        return false;
    }
    return true;
};



module.exports = { findNoteID, newNote, noteCheck, };