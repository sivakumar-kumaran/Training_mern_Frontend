import React,{useState} from 'react'
import Profile from '../componets/Profile'
import State from '../hooks/State'
import Parents from '../componets/Parents'
import Form from '../hooks/Form'
import Reducer from '../pages/Reducer'
import {userContext} from '../App'
import { Link } from 'react-router-dom'
const Home = () => {
  const[user,setUser]=useState("sivakumar")
  return (
    <div>
    <State/>
    <Parents/>
    <Reducer/>
    <Form/>
    {/* <Link to='/form'>Form</Link> */}
    <userContext.Provider value={user}>
    <Profile age="20" skills={["html","css","Node.js","Tsx"]}/>
    </userContext.Provider>
    </div>
  )
}

export default Home
