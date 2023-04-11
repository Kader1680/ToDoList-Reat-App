import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Todo({todolist, removetodo, Line}) {
  // todolist is like array parameter
  return todolist.map((td) =>{
    return(
      <div class="mt-4  d-flex text-center task justify-content-evenly  container">
      
      {/* <i class="fa-regular fa-square me-5" ></i>  */}
      <p className='fs-4'>{td.text} </p> 
      
      <i class="fs-5 fa-solid fa-trash ms-5" onClick={()=>{removetodo(td.text)}}></i>
      
      </div>
    )
}) 
}
