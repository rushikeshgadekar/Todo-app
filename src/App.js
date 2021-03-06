import React from 'react'
import './App.css';
import TodoInput from './components/TodoInput'
import './style.scss';

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <h1 className='Exe-01'>Todo App</h1>
      </div>
      <div className='list-container'>
        <TodoInput />
      </div>
    </div>
  );    
}

export default App;
