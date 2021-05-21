import React, { useState } from 'react'

export default function ActivityDetail = ({activities}) => {

    const [cart, setCart] = useState([])

    const addToCart = e => {
        setCart({ 
            ...cart, e
        }) 
        console.log("Cart", e)
    }

   
}
 return (
        <div>
            <h2> Activity Detail </h2>
           {activities.map((item) => (
               <div>
                   <div>
                   <h3>{item.name}</h3>
                   <p>{item.type}</p>
                   <p>{item.time}</p>
                   <p>{item.duration}</p>
                   <p>{item.intensity}</p>
                   <p>{item.location}</p>
               </div>

               <div>
                   <button onClick = {() => addToCart(item)}>Enroll</button>
               </div>
           ))}
        </div>
    )