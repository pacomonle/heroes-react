import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import LoginScreen from '../components/Login/LoginScreen.jsx';
import DashBoardRoutes from './DashBoardRoutes.jsx';



const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/login' component={LoginScreen} />
     {/* para las rutas hijas va sin el exact para recoger todo lo que va detras del '/' */}
                    <Route path='/' component={DashBoardRoutes} />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
