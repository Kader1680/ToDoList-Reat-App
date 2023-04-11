import React, {useState} from 'react'
export default function TodoForm(props) {
    const [input, setinput] = useState(" ");
    // handel sybmit will break any event 
    const handelSubmit = (event) =>{
        // preventDefault will break any event of function handelSubmit
        event.preventDefault();

        // to export data from this component to todolist compo
        
        // when you submit and clcikc the props will export text from input
        
        props.onSubmit({
            text: input
        })


        // when you submit will remove latest input
        setinput('');
    }
    const HandelChange = (event) =>{
        console.log(event.target.value)
        setinput(event.target.value)
    }
    return (
    <div class="myform">
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
