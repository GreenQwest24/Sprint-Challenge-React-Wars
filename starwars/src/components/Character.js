// Write your Character component here
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard'

// Write your character component here

const Character = () => {
   const [character, setCharacter] = useState([])
    useEffect (() => {
        axios.get('(https://swapi.py4e.com/api/character/')
        .then(response => {
            console.log(response.data.results);
            setCharacter(response.data.results);
        
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    <div>

        { character.map(character => {
            return  <CharacterCard

        

                name= {character.name}
                gender= { character.gender}
                status= {character.status}
                species= {character.species}
                location={character.location}

                />

                

            
        })}

    </div>
}


export default Character;
    
            


