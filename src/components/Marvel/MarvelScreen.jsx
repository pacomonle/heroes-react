import React from 'react'
import HeroesList from '../Heroes/HeroesList'



const MarvelScreen = () => {

  
    return (
        <div>
            <h1>Marvel Screen</h1>
            <hr />
            <HeroesList publisher = 'Marvel Comics'></HeroesList>
        </div>
    )
}



export default MarvelScreen
