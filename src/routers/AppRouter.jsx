import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
  } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext.js';

import LoginScreen from '../components/Login/LoginScreen.jsx';
import DashBoardRoutes from './DashBoardRoutes.jsx';
import PrivateRoutes from './PrivateRoutes.jsx';
import PublicRoutes from './PublicRoutes.jsx';



const AppRouter = () => {

const {user:{logged}} = useContext(AuthContext)

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoutes isAutenticated={logged} exact path='/login' component={LoginScreen} />
     {/* para las rutas hijas va sin el exact para recoger todo lo que va detras del '/' */}
                    <PrivateRoutes isAutenticated={logged} path='/' component={DashBoardRoutes} />
                </Switch>
            </div>
        </Router>


    )
}

export default AppRouter
