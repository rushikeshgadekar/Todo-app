import React from 'react'
import './App.css';
import TodoInput from './components/TodoInput'
function App() {
  return (
    <div className='App'>
      <div className='header'>
        <h1 className='Exe-01'>Exe - 01</h1>
      </div>
      <div className='list-container'>
        <TodoInput />
      </div>
    </div>
  );    
}

export default App;
