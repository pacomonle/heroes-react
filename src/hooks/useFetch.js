import React, { useRef, useState } from 'react';



const useFetch = (url) => {

const initialValue = true
const isComponentMountedref = useRef(initialValue)
console.log('llamada', isComponentMountedref.current)  
 
const [state, setstate] = useState({
      data: null,
      loading: true,
      error: null
    })

  // const {data, loading, error} = state
  React.useEffect(() => {
    // cuando se destruye cortamos la referencia
    return () => {
      
      isComponentMountedref.current= false
      console.log('llamada', isComponentMountedref.current)  
    };
  }, [])

  React.useEffect( () => {

  setstate( { data: null, loading: true, error: null } )

  const fetchData = async() => {
    try {
        const resp = await fetch(url)
        const respData = await resp.json()
        console.log(respData)
        if(isComponentMountedref.current){
          setstate(
            {
               data: respData,
               loading: false,
               error: null
           })
        }
        
        
    } catch (error) {
        setstate(
            { 
                data: null,
                loading: false,
                error: 'no se pudo cargar la info'
            }
        )
    }
 
  }
  fetchData()
   
  }, [url])


  return state

}

export default useFetch
