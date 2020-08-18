import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import GetHeroeByPublisher from '../helpers/GetHeroeByPublisher'
import HeroCard from './HeroCard'

const HeroesList = ({publisher}) => {
  // console.log('heroesList')
   // optimizar - evitar renderizacions 
   const heroes = useMemo(() => GetHeroeByPublisher(publisher), [publisher])

 //  const heroes = GetHeroeByPublisher(publisher)

    return (
        <div className='card-columns animate__animated animate__fadeIn'>
            {
                heroes.map(
                    hero => (
                      <HeroCard
                       key={hero.id}
                       {...hero}
                       / >
                    )
                )
            }
        </div>
    )
}

HeroesList.propTypes = {
  publisher : PropTypes.string.isRequired
}

export default HeroesList
