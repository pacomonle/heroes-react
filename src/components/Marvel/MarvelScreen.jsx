import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import HeroesList from '../Heroes/HeroesList'



const MarvelScreen = () => {

const {user}= useContext(AuthContext)  
console.log(user)

    return (
        <div>
            <h1>Marvel Screen</h1>
            <hr />
            <HeroesList publisher = 'Marvel Comics'></HeroesList>
        </div>
    )
}



export default MarvelScreen
