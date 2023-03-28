import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from "@fortawesome/free-solid-svg-icons"
import {faPencil} from "@fortawesome/free-solid-svg-icons"
function Card(props){
    const {id} = props
    function handleClick(){
        props.deleteBtn(id)
    }
    function handleEdit(){
        props.editBtn()
    }

    return(
        <div className='note-card'>
            <div className='note-card-title'>
                {props.title}
            </div>
            <div className='note-cad-text'>
                <p>
                    {props.text}
                </p>
            </div>
            <button onClick={handleEdit} className='card-btn-edit'><FontAwesomeIcon icon={faPencil} /></button>
            <button onClick={handleClick} className='card-btn'><FontAwesomeIcon icon={faTrash} /></button>
        </div>

    )
    
}

export default Card