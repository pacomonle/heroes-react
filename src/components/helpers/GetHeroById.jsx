import { heroes } from "../../data/heroes"


const GetHeroById = (id) => {
   
    const heroFilter = heroes.find(heroe => heroe.id === id)
   
   return heroFilter
   /*
    if(heroFilter && (heroFilter.length === 0)){
        throw new Error(`El id "${id}" no es correcto`)
    }else{
        return heroFilter
    }
    */
}

export default GetHeroById
