import React from 'react';
import '@testing-library/jest-dom'
import { MemoryRouter, Router } from 'react-router-dom';
import { types } from '../../../types/types';
const { mount } = require("enzyme")
const { AuthContext } = require("../../../auth/AuthContext")
const { default: Navbar } = require("../../../components/ui/Navbar")

describe('Pruebas en el Navbar', () => {

    // para mockear(simular el history)
const historyMock={
    push: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
    replace: jest.fn()
}
 // const {user:{logged}} = useContext(AuthContext)
const contextValue = {
    dispatch: jest.fn(),
    user:{
     name: 'Francisco',
     logged: true
    }     
}

// para limpiar mockeos
afterEach(() => {
    jest.clearAllMocks()
})

    // al usar el context necesitamos el mount
const wrapper = mount(
    <AuthContext.Provider value={ contextValue }>
        <MemoryRouter>
            <Router history={ historyMock }>
                <Navbar />
            </Router>  
        </MemoryRouter>
    </AuthContext.Provider>
)

    test('should mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.text-info').text().trim()).toBe('Hola Francisco')
    })
    
    test('should llamar al logout y al history', () => {
        wrapper.find('button').prop('onClick')()
       
        expect(contextValue.dispatch).toHaveBeenCalledWith({type: types.logout})

        expect(historyMock.replace).toHaveBeenCalledWith('/login')

    })
    

})
