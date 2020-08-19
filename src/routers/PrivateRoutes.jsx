import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types';


const PrivateRoutes = ({
    isAutenticated,
    component: Component,
    ...rest
}) => {

console.log(rest.location)

const {location: {pathname}} = rest
localStorage.setItem('lastPath', pathname)

    return (
        <Route
        {...rest}
        component={ (props) => (
            (isAutenticated)
            ? ( <Component {...props} />)
            : ( <Redirect to='/login' />)
        ) }
         />  
        
    )
}

PrivateRoutes.propTypes = {
    isAutenticated : PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}

export default PrivateRoutes
