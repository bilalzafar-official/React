import { useEffect } from "react";
import { useState } from "react";

function App() {
const [color,setColor]= useState("aqua")

useEffect(()=>{
document.body.style.backgroundColor = color
},[color])
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: 500,
          paddingTop: 470,
          height: 100,
          // width:100
        }}
      >
      <button
      onClick={()=>setColor("yellow")}
          className="button"
          style={{
            height: 80,
            width: 80 ,
            backgroundColor: "yellow",
            borderRadius: 20,
            // display: "flex",
            margin:10
          
          }}
        > yellow</button>
      <button
       onClick={()=>setColor("red")}
          className="button"
          style={{
            height: 80,
            width: 80 ,
            backgroundColor: "red",
            borderRadius: 20,
            // display: "flex",
            margin:10
          
          }}
        >Red</button>
        <button
         onClick={()=>setColor("green")}
          className="button"
          style={{
            height: 80,
            width: 80 ,
            backgroundColor: "green",
            borderRadius: 20,
            // display: "flex",
            margin:10
          
          }}
        >Green</button>
      </div>
    </>
  );
}

export default App;
