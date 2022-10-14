import React from 'react'
import Data from './Data_policy'
import '../style/index.css'

function Politique() {
 

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
          <p class='card-text'>{index.contenu}</p>
         <h5 class='text-sm title'>{index.auteur}</h5>
         
          </div>
        </div>
       
        

      </div>
     
    ))
  } 
    
    </>
  )
}

export default Politique