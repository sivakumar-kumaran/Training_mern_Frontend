import React, { useState } from 'react'
const Form = () => {
const [form,setForm]=useState({
    name:"",
    email:"",
    age:0,
    dep:""
})
const handleChanges=(e)=>{
   const{name,value}=e.target;
   setForm((prev)=>({
   ...prev, //update corresponding feild and other feilds are delete 
   [name]:value
   }))
 }
const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(form)
}
  return (
    <div><form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label><input type="text" name="name" value={form.name} onChange={handleChanges}/><br/>
        <label htmlFor="email">Email: </label><input type="email" name="email" value={form.email} onChange={handleChanges}/><br/>       
        <label htmlFor="age">Age: </label><input type="Number" name="age" value={form.age} onChange={handleChanges}/><br/>
        <label htmlFor="dep">Department: </label><input type="text" name="dep" value={form.dep} onChange={handleChanges}/><br/>
        <button type="submit">Submit</button>
        </form>
        </div>
  )
}

export default Form
