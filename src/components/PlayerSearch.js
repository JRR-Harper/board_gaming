import React, {useState} from 'react'

const PlayerSearch = () => {
    const [playerName, setPlayerName] = useState("");

    const handleInputChange = (evt) => {
        setPlayerName(evt.target.value)
    }

    return (
        <form>
            <label for="player-name-input"></label>
            <input id = "player-name-input" type="text" value={playerName} onChange={handleInputChange} />
        </form>
    )

}

export default PlayerSearch