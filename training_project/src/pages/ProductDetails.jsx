import React from 'react'
import { useParams } from 'react-router-dom'
const ProductDetails = () => {
     const p=[
       {id:1,name:"Laptop",price:10000,description:"azer alptop"},
       {id:2,name:"mouse",price:100,description:"bluetooth mouse"},
       {id:3,name:"Iphone",price:20000,description:"Best phone"},
    ]
    const {id}=useParams()
    const product=p.find((Pr)=>Pr.id===Number(id))
  return (
    <div>
      <h2>{product.name}</h2>
      <p>price:{product.price}</p>
      <p>description:{product.description}</p>
    </div>
  )
}

export default ProductDetails
