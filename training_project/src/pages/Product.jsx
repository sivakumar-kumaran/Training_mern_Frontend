import React from 'react'
import {Link} from 'react-router-dom'
const Product = () => {
    const p=[
       {id:1,name:"Laptop",price:10000},
       {id:2,name:"mouse",price:100},
       {id:3,name:"Iphone",price:20000},
    ]
  return (
    <div>
        <h2>products</h2>
        {
            p.map((p)=>(
                <div key={p.id}>
                    <h4>{p.name}</h4>
                    <h4>{p.price}</h4>
                    <Link to={`/product_details/${p.id}`}>View details</Link>
                </div>
            ))
        }
    </div>
  )
}

export default Product
