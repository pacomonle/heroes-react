import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import HeroesList from '../Heroes/HeroesList'


const DcScreen = () => {

    const {user}= useContext(AuthContext)  
    console.log(user)

    return (
        <div>
            <h1>DC Screen</h1>
            <hr />
            <HeroesList publisher= 'DC Comics'></HeroesList>
        </div>
    )
}



export default DcScreen

