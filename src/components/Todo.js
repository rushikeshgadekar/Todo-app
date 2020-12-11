import React, { useState } from 'react'

function Todo (props) {
    const [flag , setFlag] = useState(false)
    return(
        <div className='list-item-container'>
            <div className='aliign-items-center'>
            <h1 className='item'>{props.listitem}</h1>
                <div onClick={()=>{setFlag(!flag)}} >{ flag ? <div className='line-through'><i className='bx bxl-tux'></i></div> : <div className='line-through1'><i className='bx bxs-message-square-minus'></i></div> } </div>
            </div>
        </div>
    )
}

export default Todo;