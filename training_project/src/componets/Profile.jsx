import React from 'react'

const Profile = ({name,age,skills}) => {
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
