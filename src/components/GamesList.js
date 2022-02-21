import React from 'react';
import Game from './Game'


const GamesList = ({games}) => {

  if(!games) {
    return "waiting..."
  }

  if (games.length === 0){
    return "no games found"
  }
  
  const nodeList = games.map((game) => {
    return <Game key={game.gameId} game={game}/>
  })


  return (
    <div >
      {nodeList}
    </div>
    
  )
}

export default GamesList