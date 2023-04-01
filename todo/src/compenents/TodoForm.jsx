
import React, {useState} from 'react'
export default function TodoForm() {
    const [input, setinput] = useState();
    // handel sybmit will break any event 
    const handelSubmit = (event) =>{
        // preventDefault will break any event of function handelSubmit
        event.preventDefault();
        // when you submit will remove latest input
        setinput('');
    }
    const HandelChange = (event) =>{
        // preventDefault will break any event of function handelSubmit
        console.log(event.target.value)
        // setinput(event.target.value)
    }
    return (
    <div>
        {/* i add handsumbit to break any submition when i click on button */}
        {/* the goal when i click to button don't make reload to the page */}
        <form onSubmit={handelSubmit}>
            <input 
            type='text'
            value={input} 
            name = 'text' 
            onChange = {HandelChange}  
            placeholder = 'add to do ..' 
            />
            <button>ADD +</button>
        </form>

    </div>
 )
}
