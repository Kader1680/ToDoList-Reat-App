import React, {useState, useEffect} from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TodoList() {
    const [todolist, settodolist] = useState([]);

    
    const add = (todo) =>{

        // if you input type not etext or makke space and add will not show result like return 0
        if(!todo.text  || /^\s*$/.test(todo.text)) {
          return 0
        }
        // ...todolist is array with passing as parameter
        const newtodo = [todo, ...todolist]

        settodolist(newtodo)


        console.log(...todolist)


      }

      const removetodo = (text) =>{
        const removearry = [...todolist].filter(todo => todo.text !== text)

        settodolist(removearry)
      }

      const [line, setline] = useState(false);
      const Line = () =>{
        setline(!line)
      }



  return (
    <div class="input">
      <h3 className='mb-4'>what the plan for to day</h3>
      <TodoForm onSubmit={add} />
      <Todo class="todo" todolist={todolist}  removetodo={removetodo} />
    </div>
  )
}
