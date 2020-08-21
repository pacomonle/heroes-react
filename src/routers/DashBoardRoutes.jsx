import React from 'react'
import Navbar from '../components/ui/Navbar'
import { Redirect, Route, Switch } from 'react-router-dom'
import DcScreen from '../components/DC/DcScreen'
import MarvelScreen from '../components/Marvel/MarvelScreen'
import HeroesScreen from '../components/Heroes/HeroesScreen'
import SearchScreen from '../components/search/SearchScreen'

const DashBoardRoutes = ( props )=> {
    return (
        <>
            {/*<Navbar history={props.history} />*/}
            <Navbar  />
            <div className='container mt-4'>
                <Switch>
                    <Route excat path='/dc' component={DcScreen} />
                    <Route exact path='/marvel' component={MarvelScreen} />
                    <Route exact path='/heroe/:heroeId' component={HeroesScreen} />
                    <Route exact path='/search' component={SearchScreen} />

                    <Redirect to='/marvel' />
                </Switch>
            </div>
            
        </>
    )
}



export default DashBoardRoutes
