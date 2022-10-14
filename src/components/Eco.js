import React from 'react'
import Data from './Data_eco'
import '../style/index.css'

function Eco() {
 

  return (
    <>
   {Data.map(index=>(
      <div>
        <div class='row'>
          <div class='col-lg-3 col-md-3'>
          <img src={index.image_url} alt='titre'/>
            <h4 class='title'>{index.title}</h4>
          </div>
          <div class='col-lg-8 col-md-8'>
          <p class='card-text'>{index.content}</p>
          </div>
        </div>
       
        

      </div>
     
    ))
  } 
    
    </>
  )
}

export default Eco