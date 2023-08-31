import { useEffect, useState } from 'react'
import './App.css'
import tmdb from './tmdb'

function App() {
  useEffect(() => {
    const loadAll= async () =>{
      //Pegando Lista Inteira
      let list = await tmdb.getHomeList();
      console.log(list)
    } 
  loadAll();
  }, []);

  return (
    <h2>Ola mundo</h2>
  )
}

export default App
