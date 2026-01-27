import React from 'react'
import Child from './Child'
const Parents = () => {
    const getdata=(data)=>{
        console.log("Parent receives data form chid :",data)
    }
  return (
    <div>
      <Child send={getdata}/>
    </div>
  )
}

export default Parents
