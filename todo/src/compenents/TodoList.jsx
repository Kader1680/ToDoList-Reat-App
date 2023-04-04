import React, {useState, useEffect} from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';

export default function TodoList() {
    const [todolist, settodolist] = useState([]);

    useEffect(() => {
      
    });
    const add = (todo) =>{

        // if you input type not etext or makke space and add will not show result like return 0
        if(!todo.text  || /^\s*$/.test(todo.text)) {
          return 0
        }
        const newtodo = [todo, ...todolist]

        settodolist(newtodo)


        console.log(...todolist)

    }
  return (
    <div>
      <h3>what the plan for to day</h3>
      <TodoForm onSubmit={add} />
      <Todo todolist={todolist} />
    </div>
  )
}
