import React, { useState } from 'react'

function App() {
let [count,setCount]=useState(10)
function Incrment(){
  setCount(count+=2)
}
function Decerement(){
  setCount(count-=2)
}
console.log(count);


  return (
    <div>
      {count}
      <button onClick={Incrment}>Increment by 2</button>
      <button onClick={Decerement}>Decrement by 2</button>
    </div>
  )
}

export default App