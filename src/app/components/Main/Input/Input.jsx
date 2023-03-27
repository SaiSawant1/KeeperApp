"use client";
import React from 'react';
import { useState } from 'react';
import "./input.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from "@fortawesome/free-solid-svg-icons"
function Input(props){

   
    const [note,setNote]=useState({
        title:"",
        text:""
    })

    const handleClick=(event)=>{
        event.preventDefault();
        props.addBtn(note)
        setNote(()=>{
            return{
                title:"",
                text:""
            }
        })

    }
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setNote((prev)=>{
            return {
                ...prev,
                [name]:value
            }
        })
        
    }

    return(
        <div className='input-container'>
            <form className='input-form'>
                <input onChange={handleChange} value={note.title} type="text" row='4' name='title' placeholder='Title...' id='input-title'/>
                <textarea onChange={handleChange} value={note.text} type="text" name='text' placeholder='Note...' id='input-text' />
                <button
                onClick={handleClick} 
                className='input-btn'><FontAwesomeIcon icon={faPlus} /></button>
            </form>
        </div>
    )
}
export default Input;