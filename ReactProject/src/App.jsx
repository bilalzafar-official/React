import { useState } from "react"
function App() {

  const [counter,setCounter] = useState(10)

  const addvalues = ()=>{
// console.log("clicked",Math.random());
if (counter >=20) {
  alert("Stop this is maximum value")
  return false
}
  setCounter(count=>count+1)
  }

  const removeValues = ()=>{
// console.log("clicked",Math.random());
if (counter ===0) {
  alert("Stop this is minimum value")
  return false
}
setCounter(count=>count-1)
  }


  return (
    <>
    <div>
   <h1>Hey From App</h1>
   <button
   onClick={addvalues}
   >addCounter {counter} </button>
   <br />
   <button
   onClick={removeValues}
   >removeCounter {counter} </button>
    </div>

 
</>
    
  )
}

export default App
