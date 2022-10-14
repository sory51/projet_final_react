import React from 'react'
import Base from './Base' 
import {useNavigate} from 'react-router-dom';

function Home() {
  let navigate=useNavigate();
  return (
    <>
    <div class="container my-4">
    <div class="row row-cols-4">
    
            <div class="col">
              <div class="card" Style='width: 20rem;'>
                {Base.map(index=>( index.categorie==="Politique"&&index.id===1?
                  <div>
                     <img src={index.image_url} class="card-img-top" alt='politique'/>
                       <div class="card-body">
                        <h5 class="card-title title">{index.title}</h5>
                                
                       </div>
                       <button class="btn btn-warning" onClick={()=>{
                         navigate("/politique")
                        }}> {index.categorie}</button>
                  </div>:true

                ))}
               
               </div>
            </div>
           <div class="col">
           <div class="card" Style='width: 20rem;'>
                {Base.map(index=>( index.categorie==="Economique"&&index.id===1?
                  <div>
                     <img src={index.image_url} class="card-img-top" alt='politique'/>
                       <div class="card-body">
                        <h5 class="card-title title">{index.title}</h5>
                                
                       </div>
                       <button class="btn btn-warning" onClick={()=>{
                         navigate("/eco")
                        }}> {index.categorie}</button>

                  </div>:true

                ))}
               
               </div>
           </div>
           <div class="col">
           {Base.map(index=>( index.categorie==="Société"&&index.id===1?
                  <div>
                     <img src={index.image_url} class="card-img-top" alt='Société'/>
                       <div class="card-body">
                        <h5 class="card-title title">{index.title}</h5>
                                
                       </div>
                       <button class="btn btn-warning" onClick={()=>{
                         navigate("/societe")
                        }}> {index.categorie}</button>

                  </div>:true

                ))}

           </div>
           <div class="col">
           {Base.map(index=>( index.categorie==="Sport"&&index.id===1?
                  <div>
                     <img src={index.image_url} class="card-img-top" alt='Sport'/>
                       <div class="card-body">
                        <h5 class="card-title title title">{index.title}</h5>
                                
                       </div>
                       <button class="btn btn-warning" onClick={()=>{
                         navigate("/sport")
                        }}> {index.categorie}</button>

                  </div>:true

                ))}
           </div>
    
      </div>
     </div>
   
    </>
  )
}

export default Home