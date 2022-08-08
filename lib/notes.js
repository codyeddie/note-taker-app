const fs = require('fs');
const path = require('path');


/// this will find the id by it's id 
const findNoteID = (id, notes) => {
  const result = notes.find(note => note.id === id);
  return result;
};

// this will create a new note and send it to the db.json array
const newNote = (body, notesArray) => {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notesArray, null, 2)
  );
  return note;
};

// this will validate the user input for a note 
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

// this will find a note by it's id and then remove it from the db.json array 
const deleteNote = (id, notesArray) => {
  const note = findNoteID(id, notesArray);
  if (note) {
    const index = notesArray.indexOf(note);
    notesArray.splice(index, 1);
    notesArray.forEach((note, index) => {
      note.id = index.toString();
    });
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify(notesArray)
    );
    return true;
  }
  return false;
};

module.exports = { findNoteID, newNote, noteCheck, deleteNote, };