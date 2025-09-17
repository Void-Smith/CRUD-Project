import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'
const App = () => {
    const [todos, settodos] = useState([{ id: 1, title: "just beginning", iscompleted: false }]);
    const [title, settitle] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        const newtodos = {
            id: nanoid(),
            title,
            iscompleted: false,
        }
        settodos([...todos, newtodos]);
    }

    console.log(todos);

    return (
        <>
            <form onSubmit={submitHandler}>
                <input type="text" onChange={(e) => settitle(e.target.value)} placeholder='title' value={title} />
                <button>hell</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </>
    )
}
export default App;