import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const note =  [
    {
      "_id": "67f27d97b36ff961858f88e6",
      "user": "67f0f8d3e9ad269f812ad14d",
      "title": "My title 2",
      "description": "Please wake up early 2",
      "tag": "personal",
      "date": "2025-04-06T13:11:51.357Z",
      "__v": 0
    },
    {
      "_id": "67f3e07164d6fdea0b1ae908",
      "user": "67f0f8d3e9ad269f812ad14d",
      "title": "Breakfast 2",
      "description": "Please eat you breakfast at morning",
      "tag": "personal",
      "date": "2025-04-07T14:25:53.541Z",
      "__v": 0
    }
  ]

  const [notes, setNotes] = useState(note);
  //Add a note
  const addNote = (title, description, tag) =>{
    //ToDo Api call
    const note= {
      "_id": "67f27d97b36ff961858f88e6",
      "user": "67f0f8d3e9ad269f812ad14d",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2025-04-06T13:11:51.357Z",
      "__v": 0
    };
    setNotes(notes.push(note))
  }
  //Delete a note
  const deleteNote = (id) => {
    //ToDo Api call
    
  }
  //Edit a note
  const editNote = ()=> {


  }
  return (
    <NoteContext.Provider value={{notes , addNote, deleteNote, editNote}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
