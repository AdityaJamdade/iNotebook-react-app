import NoteContext from './noteContext'
import { useState } from 'react';

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);

    // Get all Notes
    const getNotes = async () => {
        // API call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmMTEyYTYzYzUyYzNjZDU5ODRjMDkxIn0sImlhdCI6MTY2MDAzMzAwNH0.M2GRXnMq1LBJIkMhmFU3IJN1khdBkFzzL3C-MR-HzUk'
            }
        });
        const json = await response.json();
        console.log(json);
        setNotes(json);

    }

    // Add a Note
    const addNote = async (title, description, tag) => {
        // TODO: api call
        // API call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmMTEyYTYzYzUyYzNjZDU5ODRjMDkxIn0sImlhdCI6MTY2MDAzMzAwNH0.M2GRXnMq1LBJIkMhmFU3IJN1khdBkFzzL3C-MR-HzUk'
            },
            body: JSON.stringify({title, description, tag})
        });

        const json = await response.json();
        console.log(json);

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
    const deleteNote = async (id) => {
        // API CALL
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmMTEyYTYzYzUyYzNjZDU5ODRjMDkxIn0sImlhdCI6MTY2MDAzMzAwNH0.M2GRXnMq1LBJIkMhmFU3IJN1khdBkFzzL3C-MR-HzUk'
            }
        });
        const json = response.json();
        console.log(json);

        console.log("deleting the note with id " + id);
        const newNotes = notes.filter((note) => { return note._id !== id });
        setNotes(newNotes);
    }

    // Edit a Note
    const editNote = async (id, title, description, tag) => {
        // API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmMTEyYTYzYzUyYzNjZDU5ODRjMDkxIn0sImlhdCI6MTY2MDAzMzAwNH0.M2GRXnMq1LBJIkMhmFU3IJN1khdBkFzzL3C-MR-HzUk'
            },
            body: JSON.stringify({title, description, tag})
        });
        const json = await response.json();
        console.log(json);
        
        let newNotes = JSON.parse(JSON.stringify(notes))
        // Logic to edit in client
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        console.log(id, notes);
        setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState