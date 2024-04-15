import { useState } from 'react'
import './App.css'
import TodoList from "./TodoList"

function App() {
  const [todos, setTodos] = useState({})

  return (
    <>
      <form >
        <label htmlFor="todo">Enter Todo:</label>
        <input type="text" name="todoitem" id="todo"></input>
        <input type="submit" value="Submit"></input>
      </form >
      
      <TodoList todos={todos}/>
      
    </>
  )
}

export default App
