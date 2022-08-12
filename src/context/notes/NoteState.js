import NoteContext from './noteContext'
import { useState } from 'react';

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "62f3bc86d81e4bbfa0d9fe1d",
            "user": "62f112a63c52c3cd5984c091",
            "title": "My title",
            "description": "Please wake up early ",
            "tag": "personal2",
            "date": "2022-08-10T14:11:18.741Z",
            "__v": 0
        },
        {
            "_id": "62f3bd783ad81e4bbfa0d9fe26",
            "user": "62f112a63c52c3cd5984c091",
            "title": "aditya",
            "description": "wake up early",
            "tag": "personal, development",
            "date": "2022-08-10T14:14:18.507Z",
            "__v": 0
        },
        {
            "_id": "62f3bd36ad81e4bbfa0d9fe26",
            "user": "62f112a63c52c3cd5984c091",
            "title": "aditya",
            "description": "wake up early",
            "tag": "personal, development",
            "date": "2022-08-10T14:14:18.507Z",
            "__v": 0
        },
        {
            "_id": "62f36bd3ad81e4bbfa0d9fe26",
            "user": "62f112a63c52c3cd5984c091",
            "title": "aditya",
            "description": "wake up early",
            "tag": "personal, development",
            "date": "2022-08-10T14:14:18.507Z",
            "__v": 0
        },
        {
            "_id": "62f3bd3ad681e4bbfa0d9fe26",
            "user": "62f112a63c52c3cd5984c091",
            "title": "aditya",
            "description": "wake up early",
            "tag": "personal, development",
            "date": "2022-08-10T14:14:18.507Z",
            "__v": 0
        },
        {
            "_id": "62f3bd3ad81e4bb7fa0d9fe26",
            "user": "62f112a63c52c3cd5984c091",
            "title": "aditya",
            "description": "wake up early",
            "tag": "personal, development",
            "date": "2022-08-10T14:14:18.507Z",
            "__v": 0
        },
        {
            "_id": "62f3bd3ad81e4babfa0d9fe26",
            "user": "62f112a63c52c3cd5984c091",
            "title": "aditya",
            "description": "wake up early",
            "tag": "personal, development",
            "date": "2022-08-10T14:14:18.507Z",
            "__v": 0
        }
    ];

    const [notes, setNotes] = useState(notesInitial);

    // Add a Note
    const addNote = (title,description, tag)=>{
        // TODO: api call
        console.log("adding a new note");
        const note = {
            "_id": "62f3bc86d81e4bbfa0d9fe1d",
            "user": "62f112a63c52c3cd5984c091",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-08-10T14:11:18.741Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }

    // Delete a Note
    const deleteNote = (id)=>{
        // TODO - API CALL
        console.log("deleting the note with id " + id);
        const newNotes = notes.filter((note)=>{ return note._id!==id});
        setNotes(newNotes);
    }

    // Edit a Note
    const editNote = (id, title, description, tag)=>{
        
    }

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState