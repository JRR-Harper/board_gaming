import React, {useState} from 'react'

const PlayerSearch = ({handleUserSubmit}) => {
  const [playerName, setPlayerName] = useState("earthchild316");

  const handleInputChange = (evt) => {
    setPlayerName(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleUserSubmit(playerName)
    setPlayerName("")
  }

  return (
    <form>
      <label htmlFor="player-name-input"></label>
        <input id = "player-name-input" type="text" value={playerName} onChange={handleInputChange} />
        <input type="submit" onClick={handleSubmit} value="user submit"/>
    </form>
  )

}

export default PlayerSearch