"use client";
import React from 'react';
import { useState } from 'react';
import Input from "./Input/Input"
import Notes from "./Notes/Notes"
function Main(){
    const [notes,changeNotes]=useState([])
    
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
    console.log(notes)
    return(
        <>
        <Input
            addBtn={addItem}
        />
        {notes.length>0 ? <Notes
        noteArr={notes}
            deleteBtn={deleteItem}
        /> : null }
        
        </>
    )
}

export default Main