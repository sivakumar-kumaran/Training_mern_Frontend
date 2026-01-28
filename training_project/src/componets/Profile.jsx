import React ,{useContext }from 'react'
import {userContext} from '../App'
const Profile = ({age,skills}) => {
  const name=useContext(userContext)
  return (
    <div>
       <h2>I am {name} {age} years old</h2>
      <ul>
        {skills.map((a)=><li>{a}</li>)}
      </ul>
    </div>
  )
}

export default Profile
