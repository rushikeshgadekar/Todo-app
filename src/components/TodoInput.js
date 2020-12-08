import React ,{ useState } from 'react'

function TodoInput(props) {
    // let flag=false
    const [pass,setPass] = useState()
    const [flag,setFlag] = useState(false)
    const getInput=(e)=> {
        setPass(e.target.value)
        }

    const showOutput=()=>{
        setFlag(true)
    }
    return(
        <div >
            <input className='input1' placeholder='kya bolti public' onChange={getInput}/>
           
            <button onClick={showOutput} className='btn1'><i className='bx bxl-tux'></i>  </button>
            { flag ? <h1>{pass}</h1> : ''}
        </div>
    )

}

export default TodoInput;