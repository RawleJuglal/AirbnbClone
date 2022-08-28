import react from 'react'
import './App.css'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Card from '../Card/Card'
import Data from '../../data'

export default function App(){
  // console.log(Data.map((i)=>{
  //   return i;
  // }))
  let cards = Data.map((i)=>{
    return <Card 
        key={i.id}
        {...i}
      /> 
  });
  return(
    <div className='--app-container'>
      <h1 className='--app-title'>AirBnB</h1>
      <Navbar />
      <Hero /> 
      <div className='--deck-container'>
          {cards} 
      </div>
    </div>   
  )
}