import React, {useState, useEffect} from 'react'

const Container = () => {

    const [player, setPlayer] = useState(null)


    useEffect(() => {
        getDefaultUser()
    }, [])


    const getDefaultUser = async () => {
        const result = await fetch(`https://bgg-json.azurewebsites.net/collection/earthchild316`)
        const user = await result.json()
        setPlayer(user)
    }

    return (
        <h1>"Hello"</h1>
    
    )
}

export default Container