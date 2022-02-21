import React from 'react'


const Game = ({game}) => {

  return (
    <>
      <p>Name: {game.name}</p> 
      <p>Minimum Players: {game.minPlayers} </p> 
      <p>Maximum PLayers: {game.maxPlayers}</p> 
      <p>Playing Time: {game.playingTime}</p> 
      <p>Average Rating: {game.averageRating}</p> 
      <img src={game.thumbnail} alt="image of {game.name}" /> 
    </>
  )

}


export default Game