import React ,{ useState } from 'react'
import Todo from './Todo'

function TodoInput(props) {
    const [list, setList] = useState([])
    const [input,setInput] = useState('')
    const [flag,setFlag] = useState(false)
    const getInput=(event)=> {
        setInput(event.target.value)
    }

    const keyup =(event)=>{
        if (event.keyCode === 13)  {
            showOutput()
        }
    }

    const showOutput=()=>{
        if(input === '')
        {
            alert('enter some text.');
            return;
        }
        setList([...list, {name: input, id: new Date().getTime()}]);

        setFlag(true)
        setInput('')
    }

    const removeElement = (id) => {
        setList(list.filter(item => item.id !== id));
    }

    return(
        <div >
            <input className='input1' onKeyDown={keyup} placeholder='kya bolti public' onChange={getInput} value={input}/>
            <button onClick={showOutput}  className='btn1'><i className='bx bxl-tux'></i>  </button>
            
            <div  >{flag ?  list.map((listitem, index) => { return (<Todo listitem={listitem} key={listitem.id} pop={removeElement}/>) }) : ''}</div>
        </div>
    )

}

export default TodoInput;