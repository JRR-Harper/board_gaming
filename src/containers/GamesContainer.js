import React, {useState, useEffect} from 'react'
import GamesList from '../components/GamesList'
import PlayerSearch from '../components/PlayerSearch'

const Container = () => {

    const [userGames, setUserGames] = useState(null)
    const [userName, setUserName] = useState(null)


    useEffect(() => {
        getUser()
    }, [userName])


    const getUser = async (user) => {
      if (userName) {
        const result = await fetch(`https://bgg-json.azurewebsites.net/collection/${userName}`)
        const games = await result.json()
        setUserGames(games)
      }
    }

    const handleSubmit = (submittedUserName) => {
      setUserName(submittedUserName);
    }

    return (
        <>
            <PlayerSearch handleUserSubmit={handleSubmit}/>
            <GamesList games={userGames}></GamesList>
        </>
    )
}

export default Container