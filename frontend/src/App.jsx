import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from "./TodoList"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <form>
        <label htmlFor="todo">Enter Todo:</label>
        <input type="text" name="todoitem" id="todo"></input>
        <input type="submit" value="Submit"></input>
      </form>
      <TodoList />
      
    </>
  )
}

export default App
