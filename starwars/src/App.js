import React from 'react';
import  {userState, userEffect } from 'react';
import './App.css';
import axios from 'axios';
import Cards from './components/Character'
import styled from 'styled-components'



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [data, setData] = userState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
   userEffect(() => {
     axios.get('https://swapi.py4e.com/api/character/')

     .then((res) => {

      setData(res.data.results)
     })
     .catch((err) => {
       console.log('Somethings Wrong!')

     })

    }, [])

  return (
    <div className="App">
      <h1 className="Header">Star Wars List!</h1>
        <div>
          <Cards data = {data} />
        </div>
    </div>
  );
}

export default App;
