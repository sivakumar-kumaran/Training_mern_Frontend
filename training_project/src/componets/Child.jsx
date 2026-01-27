import React from 'react'

const Child = ({send}) => {
  return (
    <div>
      <button onClick={()=>send("sivakumar")}>send data</button>
    </div>
  )
}

export default Child
