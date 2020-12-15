import React from 'react'

export default function MyForm(props) {
    return (
        <div>
        <input type='text' placeholder='enter comment' ref={props.commentRef}/>
        <button onClick={props.handleClick}>Add comment</button>
            
        </div>
    )
}
