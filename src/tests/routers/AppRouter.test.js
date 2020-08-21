import { mount } from 'enzyme';
import React from 'react';
import { AuthContext } from '../../auth/AuthContext';
import AppRouter from '../../routers/AppRouter';

describe('Pruebas en el AppRouter', () => {

   // const {user:{logged}} = useContext(AuthContext)
   const contextValue = {
       dispatch: jest.fn(),
       user:{
        logged: false
       }     
   }

    test('debe de mostrar login si no está autenticado ', () => {
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        );
        expect( wrapper ).toMatchSnapshot();
        
    })

    test('debe de mostrar el componente marvel si está autenticado', () => {
        
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Juan'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect( wrapper.find('.navbar').exists() ).toBe(true);
        

    })
})
