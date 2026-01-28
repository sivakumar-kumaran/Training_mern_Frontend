import React,{useReducer} from 'react'
const reducer=(state,action)=>{
    switch(action.type){
        case "INCREMENT":return {count:state.count+1}
        case "DECREMENT":return {count:state.count-1}
        case "RESET":return {count:state.count=0}
        default: return {count:0}
    }
}
const intialState={count:0}
const Reducer = () => {
    const [state,dispatch]=useReducer(reducer,intialState)
  return (
    <>
    <h1>Reducer Example</h1>
    <h1>Count:{state.count}</h1>
    <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
    <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
    <button onClick={()=>dispatch({type:"IRESET"})}>RESET</button>
    </>
    
  )
}

export default Reducer
