import React ,{ useState } from 'react'
import Todo from './Todo'

function TodoInput(props) {
    const [list, setList] = useState([])
    const [pass,setPass] = useState('')
    const [flag,setFlag] = useState(false)
    const getInput=(event)=> {
        setPass(event.target.value)
    }

    const keyup =(event)=>{
        if (event.keyCode === 13)  {
            showOutput()
        }
    }

    const showOutput=()=>{
        let temp=list
        temp.push(pass)
        setList(temp)
        setFlag(true)
        setPass('')
    }
    return(
        <div >
            <input className='input1' onKeyDown={keyup} placeholder='kya bolti public' onChange={getInput} value={pass}/>
            <button onClick={showOutput}  className='btn1'><i className='bx bxl-tux'></i>  </button>
            {/* { flag ? <h1>{pass}</h1> : ''} */}
            <div  >{flag ?  list.map((listitem, index) => { return (<Todo listitem={listitem} key={index}/>) }) : ''}</div>
        </div>
    )

}

export default TodoInput;