import React from 'react'
import PropTypes from 'prop-types'

const LoginScreen = ({history}) => {

const handleLogin = () => {
   // console.log('click')
    history.push('/')
   // history.replace('/')
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
