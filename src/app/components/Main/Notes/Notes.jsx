import React from 'react';
import "./notes.css"

import Card from "./Card"
function Notes(props){
    return(
        <div className='notes-container'>
            {props.noteArr.map((note,index)=>(<Card
            deleteBtn={props.deleteBtn}
            key={index}
            id={index}
            title={note.title}
            text={note.text}
            />))}
        </div>
    )
}

export default Notes