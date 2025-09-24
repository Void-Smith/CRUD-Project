import React from 'react'
import { useState } from 'react'
export const Read = ({ todos, settodos }) => {


  const deleteHandler = (id) => {
    const filterTodo = todos.filter(( todo)=> {return todo.id != id});
    settodos(filterTodo);

  }
  return (
    <ol className="list-decimal list-inside">
  {todos.map((todo) => (
    <li key={todo.id}>
      {todo.title}
      <span
        className="ml-2 text-red-500 cursor-pointer"
        onClick={() => deleteHandler(todo.id)}
      >
        delete
      </span>
    </li>
  ))}
</ol>


  )
}
