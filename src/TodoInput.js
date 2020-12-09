import React, { useState } from 'react'
import { addTodo } from './redux/actions'
import "./TodoInput.css"
import {v1 as uuid} from "uuid";
import {useDispatch} from 'react-redux'

function TodoInput() {
    const[name,setName]=useState();
    const dispatch=useDispatch();

    return (
        <div className="todoInput">
            <h1>What's the plan for Today?</h1>
            <input onChange={(e)=>setName(e.target.value)} value={name} className="input" type="text"/>
            <button onClick={()=>{
                dispatch(addTodo({
                id:uuid(),
                name:name,
            }))
        setName('')
            }}
            className="inputButton">Add</button>
        </div>
    )
}

export default TodoInput
