import React from 'react';
import {Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Eco from './Eco';
import Politique from './Politique';
import Societe from './Societe';
import Sport from './Sport';

function Navigation() {

        return (
          <>
            <div>
            <div class="card text-center">
              
            <div class="card-header">  
  
              <nav className="navbar navbar-light">
              <ul class="nav nav-tabs card-header-tabs">
                  {/*  Link components are used for linking to other views */}
                  <li class="nav-item">
                    {" "}
                    <Link class=" active btn btn-warning ms-3" aria-current="true" to="/">Accueil</Link>
                    </li>
                
                  <li class="nav-item">
                    <Link class=" btn btn-warning ms-3" to="/politique">Politique</Link>
                  </li>
                 
                  <li class="nav-item">
                    <Link class=" btn btn-warning ms-3" to="/eco">Economique</Link>
                  </li>
                  <li class="nav-item">
                    <Link class=" btn btn-warning ms-3"   to="/societe">Société</Link>
                  </li>
                  <li class="nav-item">
                    <Link class=" btn btn-warning ms-3"   to="/sport">Sport</Link>
                  </li>
                 
                </ul>
              </nav>
            
              </div>
              </div>
              {/*  Route components are rendered if the path prop matches the current URL  */}
              <div class="card-body">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/politique" element={<Politique />} />
                <Route path="/eco" element={<Eco />} />
                <Route path="/societe" element={<Societe />} />
                <Route path="/sport" element={<Sport />} />
              
              </Routes>
  </div>
             
            </div>
          </>
        );
       };

export default Navigation

  
 
