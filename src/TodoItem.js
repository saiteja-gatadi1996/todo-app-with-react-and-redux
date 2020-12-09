import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from './redux/actions';
import "./TodoItem.css"

function TodoItem({todo}) {
    const[edit,setEdit]=useState(false)
    const[name,setName]=useState('');

    const dispatch=useDispatch();

    return (
        <div className="todoItem">
            <div className="hash">#{todo.id.length>1?todo.id[2]:todo.id}</div>
            <div className="title">{edit?<input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>: todo.name}</div>
            <button onClick={()=>{
                dispatch(updateTodo(
                        {
                        ...todo,
                        name:name
                        }
                ))
                if(edit){
                    setName(todo.name)
                }
            
                setEdit(!edit)
            }} 
            className="edit">{edit?"Update":"Edit"}</button>
            <button onClick={()=>dispatch(deleteTodo(todo.id))} className="delete">Delete</button>
        </div>
    )
}

export default TodoItem
