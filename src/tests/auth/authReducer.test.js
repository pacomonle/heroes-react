const { default: AuthReducer } = require("../../auth/AuthReducer")
import '@testing-library/jest-dom'
import { types } from '../../types/types';

describe('Pruebas en authReducer', () => {


    test('should retornar state por default', () => {
 
      // const state = AuthReducer(state, action)
       const state = AuthReducer({ logged: false }, {});
       expect( state ).toEqual({ logged: false });
        
      
    })
    
    test('should autenticar y colocar nombre usuario', () => {
        const actionLogin= {
            type: types.login,
            payload: {
                name: 'Hernando'
            }
        }

        const state = AuthReducer({ logged: false }, actionLogin);
        expect( state ).toEqual({ 
            logged: true,
            name: 'Hernando'
        });
        
    })
    
    test('should borra nombre usuario y logged false', () => {
        const actionLogout = {
            type: types.logout
        }

        const state = AuthReducer({ logged: true, name: 'Hernando' }, actionLogout);
        expect( state ).toEqual({ 
            logged: false,
        });
    })
    
})
