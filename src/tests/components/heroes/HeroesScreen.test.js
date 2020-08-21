import React from 'react';
import '@testing-library/jest-dom'
import HeroesScreen from '../../../components/Heroes/HeroesScreen';
import { MemoryRouter, Redirect, Route } from 'react-router-dom';
const { mount } = require("enzyme")

describe('Pruebas en el HeroesScreen', () => {
   // para mockear(simular el history)
    const historyMock={
        push: jest.fn(),
        length: 1,
        goBack: jest.fn()
     }


   
    test('debe de mostrar el componente redirect si no hay argumentos en el URL', () => {

        const wrapper = mount(
            // pasar por props la ruta - url de entrada
            <MemoryRouter initialEntries={ ['/hero'] }>
                 <HeroesScreen history={historyMock} />
            </MemoryRouter>
            
            )

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find(Redirect).exists()).toBe(true)
    })
    

    test('debe de mostrar un hero si el parámetro existe y se encuentra', () => {
        

        const wrapper = mount(
                 // pasar por props la ruta - url de entrada ... heroe/heroeID
            <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
                <Route path="/heroe/:heroeId" component={ HeroesScreen } />
            </MemoryRouter>
        );
       // console.log(wrapper.html())
        expect( wrapper.find('.row').exists() ).toBe(true);
        

    });

    test('debe de regresar a la pantalla anterior con PUSH', () => {
        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn(),
        }

     
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
                <Route 
                    path="/heroe/:heroeId" 
                    component={ () => <HeroesScreen history={ history } /> }
                />
            </MemoryRouter>
        );
        
        wrapper.find('button').prop('onClick')();

        // console.log(history.length)
        
        expect( history.push ).toHaveBeenCalledWith('/');
        expect( history.goBack ).not.toHaveBeenCalled();


    });

    test('debe de regresar a la pantalla anterior GOBACK', () => {
       
        const history = {
            length: 10,
            push: jest.fn(),
            goBack: jest.fn(),
        }
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
                <Route 
                    path="/heroe/:heroeId" 
                    component={ () => <HeroesScreen history={ history } /> }
                />
            </MemoryRouter>
        );
        
        wrapper.find('button').prop('onClick')();
        
        expect( history.push ).toHaveBeenCalledTimes(0);
        expect( history.goBack ).toHaveBeenCalled();

    })

    test('debe de llamar el redirect si el hero no existe', () => {

        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn(),
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider123123123']}>
                <Route 
                    path="/heroe/:heroeId" 
                    component={ () => <HeroesScreen history={ history } /> }
                />
            </MemoryRouter>
        );
        
 // al hacer el redirect el componente HeroesScreen no existe, es un string vacio '' - ver snapShot 
        expect( wrapper.text() ).toBe('');
        
    })
  
    

})
