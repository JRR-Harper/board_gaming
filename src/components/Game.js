import React from 'react'
import Styled from 'styled-components'



const Game = ({game}) => {
 
const GameDiv = Styled.div`
  background: ${game.isExpansion ? '#119DA4' : '#157F1F'};
  padding: 0.5em;
  margin: 0.5em;
  width: 20em;
  flex-grow: 1;
  border-radius: 2em;
`

const FlexDiv = Styled.div`
  display: flex;
  padding: 0.5em;
  margin 0.5em;
`

const DetailsDiv = Styled.div`
  padding-left: 2em;
  display: inline-block;
 `

const StyledImage = Styled.img`
  object-fit: contain;
 `




  return (
    <GameDiv>
      <h3>{game.name}</h3>
     
      <FlexDiv>
        <StyledImage src={game.thumbnail} alt={`image of ${game.name}`} /> 

        <DetailsDiv>
        <p>Minimum Players: {game.minPlayers} </p> 
        <p>Maximum Players: {game.maxPlayers}</p> 
        <p>Playing Time: {game.playingTime}</p> 
        <p>Average Rating: {game.averageRating.toFixed(2)}</p>
        </DetailsDiv>
      </FlexDiv>
       
      
    </GameDiv>
  )

}


export default Game