import React, { useState, useEffect } from 'react'
import './App.css'
import Home from './views/home'
import Blog from './views/blog'

function App() {
  let [count, setCount] = useState(0)
  function clickHandler() {
    console.log('click')
  }
  useEffect(() => {
    console.log(count, 'count')
    console.log('mounted', 'update')
    document.addEventListener('click', clickHandler)
    return () => {
      console.log('unMount')
      document.removeEventListener('click', clickHandler)
    }
  })
  return (
    <div className="App">
      <header className="App-header">
        <div>{count}</div>
        <button onClick={() => setCount((count += 1))}>add</button>
        <button onClick={() => setCount((count -= 1))}>reduce</button>
        <hr></hr>
        <Home></Home>
        <Blog></Blog>
      </header>
    </div>
  )
}

export default App
