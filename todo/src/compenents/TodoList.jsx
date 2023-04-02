import React, {useState} from 'react'
import TodoForm from './TodoForm';

export default function TodoList() {
    const [todolist, settodolist] = useState([]);

    const add = (todos) =>{
        const newtodo = [todos, ...todolist]
        settodolist(newtodo)
        console.log(...todolist)
    }
  return (
    <div>
      <h3>what the plan for to day</h3>
      <TodoForm onSubmit={add} />
    </div>
  )
}
