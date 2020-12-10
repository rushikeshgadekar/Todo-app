import React, { useState } from 'react'

function Todo (props) {
    const [flag , setFlag] = useState(false)
    return(
        <div className='list-item-container'>
            <h1 className='item'>{props.listitem}</h1>
                <div onClick={()=>{setFlag(!flag)}} className='btn2'>{ flag ? <div className='btn2 line-through'><i className='bx bxl-tux'></i></div> : <div className='btn2 line-through1'><i class='bx bxs-message-square-minus'></i></div> } </div>
        </div>
    )
}

export default Todo;