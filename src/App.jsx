import React from 'react'
import { useState } from 'react'
import { Create } from './Create';
import { Read } from './Read';
const App = () => {
    
    const [todos, settodos] = useState([{id : 1, title : "hello"}]);
    
    

    return (
        <>
            <Create todos = {todos} settodos = {settodos} />
            <Read todos = {todos} settodos = {settodos} />

           
        </>
    )
}
export default App;