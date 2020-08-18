import { heroes } from "../../data/heroes"



const GetHeroeByPublisher = (publisher) => {
   const validPublisher = ['DC Comics', 'Marvel Comics']
   // validar que el argumento esta incluido en el array
  if(!validPublisher.includes(publisher)) {
      throw new Error(`Publisher "${publisher}" no es correcto`)
  }else{
      return heroes.filter(heroe => heroe.publisher === publisher)
  }

  
}

export default GetHeroeByPublisher
