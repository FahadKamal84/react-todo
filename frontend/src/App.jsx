import { useState } from 'react'
import './App.css'
import TodoList from "./TodoList"

function App() {
  const [todos, setTodos] = useState("")

  const handleChange = (event) => {
    setTodos(event.target.name)
  }
  return (
    <>
      <form >
        <label htmlFor="todo">Enter Todo:</label>
        <input type="text" name="todoitem" id="todo" onChange={handleChange}></input>
        <button type="submit">Submit</button>
      </form >
      
      <TodoList todos={todos}/>
      
    </>
  )
}

export default App
