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
        <div className='activitydets'>
          <h3>Activity Details</h3>
          {activities.map(() => {
            <div>
               <h3>{item.name}</h3>
//             <p>{item.type}</p>
//             <p>{item.time}</p>
//             <p>{item.duration}</p>
//             <p>{item.intensity}</p>
//             <p>{item.location}</p>
        <div>
        <button onClick = {() => addToCart(item)}>Enroll</button>          
        </div> 
            </div>
            
                
          } )}
        </div>
    )


