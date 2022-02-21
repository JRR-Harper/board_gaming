import React from 'react';
import Game from './Game'

import Styled from 'styled-components'

const StyledDiv = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly
`

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
    <StyledDiv >
      {nodeList}
    </StyledDiv>
    
  )
}

export default GamesList