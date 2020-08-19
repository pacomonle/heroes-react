import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'


const LoginScreen = ({history}) => {
 // destructurar el value dle provider
const {user, dispatch} = useContext(AuthContext)

console.log(user)


const handleLogin = () => {
  
const path = localStorage.getItem('lastPath') || '/'
// console.log(path)
  const loginAction = {
    type: types.login,
    payload: {name: 'Monleon'}
  }

  dispatch(loginAction)

    // history.push('/')
    history.replace(`${path}`)
  
}

    return (
        <div className='container mt-5'>
            <h1>Login</h1>
            <hr />

            <button 
            className='btn btn-primary'
            onClick={ handleLogin }
            type="button">
                Login
            </button>
        </div>
    )
}


LoginScreen.propTypes = {
   history : PropTypes.object.isRequired
}

export default LoginScreen
