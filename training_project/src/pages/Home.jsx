import React from 'react'
import Profile from '../componets/Profile'
import State from '../hooks/State'
import Parents from '../componets/Parents'
import Form from '../hooks/Form'
const Home = () => {
  return (
    <div>
    <Profile name="sivakumar" age="20" skills={["html","css","Node.js","Tsx"]}/>
    <State/>
    <Parents/>
    <Form/>
    </div>
  )
}

export default Home
