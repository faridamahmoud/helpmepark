import React from 'react'
import Navbar from "./Components/Navbar";
import Imagehome from './Components/Imagehome';
import Parkingslots from './Components/Parkingslots';
import "./Home.css";

function Home() {
  return (
    <div className='main'>
        <Navbar/>
        <Imagehome style={{ margin: '0', padding: '0' }}/> 
        <Parkingslots style={{ margin: '0', padding: '0' }}/>
    </div>
  )
}

export default Home;
