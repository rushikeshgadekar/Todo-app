import React, { useState } from 'react'




function Todo (props) {
    const [flag , setFlag] = useState(false);
    const [checked, setChecked] = useState(false);

    const checkHandler = () => {
        setChecked(!checked);
        setFlag(!flag);
    }

    return(
        <div className='list-item-container'>
            <div className='align-items-center'>
                <h1 className={`item ${flag?'line-through':''}`}>{props.listitem.name}</h1>
                <input className='checkbox' type="checkbox" checked={checked} onClick = {checkHandler}/>
                <button onClick={()=>{props.pop(props.listitem.id)}} className='delbtn'>Del</button> 
            </div>
        </div>
       
    )
}

export default Todo;