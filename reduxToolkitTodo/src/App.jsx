import { useState } from 'react'
import AddTodo from "./components/addTodo"
import './App.css'
import Todo from './components/todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='bg-gray-700 m-4 text-3xl text-white'>Redux ToolKit Todo</div>
   <AddTodo />
   <Todo />
    </>
  )
}

export default App
