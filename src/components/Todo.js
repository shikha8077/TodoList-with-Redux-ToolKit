import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import {  removeTodo } from "../reducers/todos/todoSlice";

function Todo() {
    const dispatch = useDispatch();


   const todos = useSelector((state)=>state.todos)
   console.log(todos,"todosssssssssss")
    
  return (
    <>
    <div>
    Todos
      {todos.map((todo,keys)=>(
        <li>{todo.text} <button onClick={()=>dispatch(removeTodo(todo.id))}>remove</button></li>
  ))}
    </div>
    </>
  )
}

export default Todo
