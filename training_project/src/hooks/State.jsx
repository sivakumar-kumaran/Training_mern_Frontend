import { useState,useEffect } from 'react' 
const State = () => {
    const[intial,setIntial]=useState(0);
    const [like,setLike]=useState(0);
    const [dislike,setDisLike]=useState(0);
    useEffect(()=>{console.log("useEffect")},[like,dislike,intial])
    return (
    <div>
    <h1>{like}    {dislike}</h1>
    <button onClick={()=>setLike(like+1)}>❤️</button>
    <button onClick={()=>setDisLike(dislike+1)}>👎</button>
    </div>
  )
}

export default State
