"use client";
import React from 'react';
import { useState } from 'react';
import Input from "./Input/Input"
import Notes from "./Notes/Notes"
import "./main.css"
function Main(){
    const [notes,changeNotes]=useState([])
    
    const [overlayState,changeOverlayState]=useState(false)

    const addItem=(newNote)=>{
        changeNotes((prev)=>{
            return [...prev,newNote]
        })
    }
    const deleteItem=(id)=>{
        changeNotes((prev)=>{
            return prev.filter((note,index)=>{
                return index!==id
            })
        })
    }
    function editBtn(){
        changeOverlayState((prev)=>{
            return !prev
        })
    }
    return(
        <main className={overlayState ? "main overlay":".main"}>
            <Input
                addBtn={addItem}
            />
            {notes.length>0 ? <Notes
            noteArr={notes}
            deleteBtn={deleteItem}
            editBtn={editBtn}
            /> : null }
        </main>
    )
}

export default Main