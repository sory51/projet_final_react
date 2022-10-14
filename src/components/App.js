
import '../style/App.css';
import Header from './Header';
import React from 'react'
import Navigation from './Navigation';


function App() {
  return (
    <>
      <div className='row'>
      <Header/>
      </div>
     
      
      <div className='row'>     
       <Navigation/>
      </div>
     
    </>
  );
}

export default App;
