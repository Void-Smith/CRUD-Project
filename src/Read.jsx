import React from 'react'
import { useState } from 'react'
export const Read = ({todos, settodos}) => {
    

    const deleteHandler = (id )=>{
      const filterTodo = todos.filter((todo)=> todo.id == id);
      settodos(filterTodo);
      
    }
  return (
     <ol>
                {todos.map((todo) => (
                    <>
                    <li key={todo.id}>{todo.title}
                        <span onClick={()=>deleteHandler(todo.id)}>delete</span></li> 
                    </>
                ))}
            </ol>

  )
}
