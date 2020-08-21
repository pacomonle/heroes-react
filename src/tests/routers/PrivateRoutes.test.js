
import { mount, shallow } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import PrivateRoutes from '../../routers/PrivateRoutes';

describe('Pruebas en el PrivateRoutes', () => {
 
    const rest = {
        location: {
            pathname: '/marvel'
        }
    }
   // simular functions
    Storage.prototype.setItem = jest.fn();

    test('debe de mostrar el componente si está autenticado y guardar localStorage' , () => {
        const wrapper = mount(
                     <MemoryRouter>
                                <PrivateRoutes 
            // hay que pasar las Proptypes
                                 {...rest}
                                 component = {() => <span>Test!</span> } 
                                 isAutenticated = {true}/>
                     </MemoryRouter>)
        //console.log(wrapper.html())
        expect( wrapper.find('span').exists() ).toBe(true);
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/marvel');


    }) 

    test('debe de bloquear el componente si no está autenticado', () => {
        
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={ false }
                    component={ () => <span>Listo!</span> }
                    { ...props }
                />
            </MemoryRouter>
        );

        expect( wrapper.find('span').exists() ).toBe(false);
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/marvel');

    });

})
