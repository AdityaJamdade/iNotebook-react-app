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
            "_id": "62f3bd3ad81e4bbfa0d9fe26",
            "user": "62f112a63c52c3cd5984c091",
            "title": "aditya",
            "description": "wake up early",
            "tag": "personal, development",
            "date": "2022-08-10T14:14:18.507Z",
            "__v": 0
        },
        {
            "_id": "62f3bd3ad81e4bbfa0d9fe26",
            "user": "62f112a63c52c3cd5984c091",
            "title": "aditya",
            "description": "wake up early",
            "tag": "personal, development",
            "date": "2022-08-10T14:14:18.507Z",
            "__v": 0
        },
        {
            "_id": "62f3bd3ad81e4bbfa0d9fe26",
            "user": "62f112a63c52c3cd5984c091",
            "title": "aditya",
            "description": "wake up early",
            "tag": "personal, development",
            "date": "2022-08-10T14:14:18.507Z",
            "__v": 0
        },
        {
            "_id": "62f3bd3ad81e4bbfa0d9fe26",
            "user": "62f112a63c52c3cd5984c091",
            "title": "aditya",
            "description": "wake up early",
            "tag": "personal, development",
            "date": "2022-08-10T14:14:18.507Z",
            "__v": 0
        },
        {
            "_id": "62f3bd3ad81e4bbfa0d9fe26",
            "user": "62f112a63c52c3cd5984c091",
            "title": "aditya",
            "description": "wake up early",
            "tag": "personal, development",
            "date": "2022-08-10T14:14:18.507Z",
            "__v": 0
        },
        {
            "_id": "62f3bd3ad81e4bbfa0d9fe26",
            "user": "62f112a63c52c3cd5984c091",
            "title": "aditya",
            "description": "wake up early",
            "tag": "personal, development",
            "date": "2022-08-10T14:14:18.507Z",
            "__v": 0
        }
    ];

    const [notes, setNotes] = useState(notesInitial);
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState