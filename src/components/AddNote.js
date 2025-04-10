
import noteContext from "../context/notes/noteContext";
import React, { useContext, useState } from 'react';


const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] =useState({title:"", descriptoin:"", tag:""})
    const handleClick = () => {
        addNote(note);

    }
    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})

    }

    return (
        <div className="container my-3">
            <h2>Add a Note</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label" >Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        aria-describedby="emailHelp"
                        onChange={onChange}
                    />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label" >Decription</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        onChange={onChange}
                    />
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onclick= {handleClick}>Submit</button>
            </form>
        </div>
    )
}

export default AddNote
