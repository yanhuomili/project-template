import React from 'react'
import logo from './logo.svg'
import './App.css'
import TodoList from './views/todoList'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <TodoList></TodoList>
      </div>
    </div>
  )
}

export default App
