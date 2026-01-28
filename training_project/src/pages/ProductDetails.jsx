import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const ProductDetails = () => {
  const[p,setProduct]=useState([]);
  const {id}=useParams()
    useEffect(()=>{
      fetch(`https://fakestoreapi.com/products/${id}`)
  .then(response => response.json())
  .then(data => setProduct(data))
    },[])
  return (
    <div>
      <h2>{p.title}</h2>
      <p>price:{p.price}</p>
      <p>description:{p.description}</p>
    </div>
  )
}

export default ProductDetails
