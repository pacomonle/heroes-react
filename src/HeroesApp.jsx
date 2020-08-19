import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import AuthReducer from './auth/AuthReducer'
import AppRouter from './routers/AppRouter'

// el init lo usaremos para leer el local storage
const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false }
}

const HeroesApp = () => {


const [user, dispatch] = useReducer(AuthReducer, {}, init)

useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
    /*
    return () => {
        localStorage.removeItem('user')
    }
    */
}, [user])

    return (
        <>

        <AuthContext.Provider value={ { user , dispatch } }>
            <AppRouter></AppRouter>
        </AuthContext.Provider>
            
        </>
    )
}

export default HeroesApp
