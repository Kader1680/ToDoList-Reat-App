import React from 'react'
export default function Todo({todolist}) {
  return todolist.map((td) =>{
    return(
      <div><i class="fa-regular fa-square"></i> {td.text} </div>
    )
}) 
    
  
}
