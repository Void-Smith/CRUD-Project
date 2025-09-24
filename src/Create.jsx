import React from 'react'
import { nanoid } from 'nanoid'
import { useState } from 'react'
export const Create = ({todos, settodos}) => {

    
        const [title, settitle] = useState("");
    
    const submitHandler = (e) => {
        e.preventDefault();
        const newtodos = {
            id: nanoid(),
            title,
            iscompleted: false,
        }
        settodos([...todos, newtodos]);
        settitle("");
    }
  return (
    <form onSubmit={submitHandler} >
                <input type="text" onChange={(e) => settitle(e.target.value)} placeholder='title' value={title} />
                <button>Add</button>
            </form>

  )
}
