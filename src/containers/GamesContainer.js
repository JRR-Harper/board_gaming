import React, {useState, useEffect} from 'react'
import PlayerSearch from '../components/PlayerSearch'

const Container = () => {

    const [userGames, setUserGames] = useState(null)
    const [userName, setUserName] = useState(null)


    useEffect(() => {
        getDefaultUser()
    }, [])


    const getDefaultUser = async () => {
        const result = await fetch(`https://bgg-json.azurewebsites.net/collection/earthchild316`)
        const games = await result.json()
        setUserGames(games)
    }

    return (
        <>
            <PlayerSearch/>
            <h1>"Hello"</h1>
        </>
    )
}

export default Container