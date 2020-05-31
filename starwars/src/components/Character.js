// Write your Character component here
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';



// Write your character components here

const Cards = props => {
    let {data} = props;

    return (

        <div>

            { data.map(character => {
                return (

                    <StyledDiv>
                        <StyledCard>

                            <h3>Name: {character.name}</h3>
                            <h3>Gender: {character.gender}</h3>
                            <h3>Status: {character.status}</h3>
                            <h3>Spieces: {character.species}</h3>
                            <h3>Mug Shot</h3>

                            <StyledImg src={character.image}></StyledImg>

                        </StyledCard>
                    </StyledDiv>
                )
            })}
        </div>
    )
        }
const StyledDiv = styled.div

const StyledCard = styled.div

const StyledImg = styled.img



export default CharacterCard;

  