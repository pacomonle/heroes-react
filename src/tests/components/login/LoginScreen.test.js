import React from 'react';
import { mount } from 'enzyme';
import { types } from '../../../types/types';
import LoginScreen from '../../../components/Login/LoginScreen';
import { AuthContext } from '../../../auth/AuthContext';

describe('Pruebas en <LoginScreen />', () => {
    // mock del history
    const history = {
        replace: jest.fn()
    }
    // mock del context
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }
    // construir  un wrapper
    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>

            <LoginScreen history={ history } />

        </AuthContext.Provider>
    )

    test('debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de realizar el dispatch y la navegación', () => {
        
        // wrapper.find('button').prop('onClick')();
        const handleClick = wrapper.find('button').prop('onClick');

        handleClick();

        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Monleon'
            }
        });
        // probando la redireccion por defecto
        expect( history.replace ).toHaveBeenCalledWith('/');
       // probando el local storage para la redireccion
        localStorage.setItem('lastPath','/dc');
        handleClick();
        expect( history.replace ).toHaveBeenCalledWith('/dc');
    })
    
    

})
