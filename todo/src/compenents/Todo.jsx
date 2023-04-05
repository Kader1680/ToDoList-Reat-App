import React, {useState} from 'react'
import { Gi3DGlasses } from 'react-icons/gi';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Todo({todolist, removetodo}) {
  // todolist is like array parameter
  return todolist.map((td) =>{
    return(
      <div class="d-flex text-center">
      
      <i class="fa-regular fa-square me-5" onClick={()=>{removetodo(td.text)}}></i> 
      <p class="me-5">{td.text} </p> 
      <Gi3DGlasses onClick={()=>{removetodo(td.text)}} />
      
      {/* <i class="fa-solid fa-trash ms-5"></i> */}
      
      </div>
    )
}) 
}
