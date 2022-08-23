import react from 'react'
import './App.css'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Card from '../Card/Card'

export default function App(){
  return(
    <div className='--app-container'>
      <h1 className='--app-title'>AirBnB</h1>
      <Navbar />
      <Hero /> 
      <div className='--deck-container'>
          <Card />  
      </div>
    </div>   
  )
}