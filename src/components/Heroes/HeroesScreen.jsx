import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import GetHeroById from '../helpers/GetHeroById';
import PropTypes from 'prop-types'

const HeroesScreen = ({history}) => {
// recuperar los params que viene por url
   const params = useParams()
   const {heroeId} = params
   
   // optimizar - evitar renderizacions 
   const hero = useMemo(() => GetHeroById(heroeId), [heroeId])
  // const hero = GetHeroById(heroeId)
   // console.log(hero)
   if(!hero){ return <Redirect to='/' /> }

   const { 
    superhero,
    alter_ego,
    first_appearance,
    publisher,
    characters
          } = hero


    const handleReturn = () =>{
  // validar longitud del history
        if(history.length <= 2){
            history.push('/')
        }else{
               // regresar atras
            history.goBack()
        }

      
    }

    return (
        <div className='row mt-4'>
           <div className='col-4'>
               <img src={`../assets/heroes/${heroeId}.jpg`} alt={superhero} 
               className='img-thumbnail animate__animated animate__fadeInLeft'/>
           </div>
           <div className='col-8 animate__animated animate__fadeIn'>
               <h3>{superhero}</h3>
               <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                      <strong>ALTER EGO: </strong> {alter_ego}
                    </li>
                    <li className='list-group-item'>
                      <strong>PUBLISHER: </strong> {publisher}
                    </li>
                    <li className='list-group-item'>
                      <strong>FIRST APPEARENCE: </strong> {first_appearance}
                    </li>
               </ul>
               <h5>Characters</h5>
               <p>{characters}</p>
               <button 
               className='btn btn-outline-info'
               onClick={handleReturn}
               type="button">
               Return
               </button>
           </div>
        </div>
    )
}

HeroesScreen.propTypes = {
    history : PropTypes.object.isRequired
 }

export default HeroesScreen
