import { heroes } from "../../data/heroes"


const GetHeroesByName = ( name = '') => {
 console.log(name)
  if(name === '' ){
      return []
  }else{
    return  heroes.filter(hero => hero.superhero.toLowerCase().includes(name.toLowerCase()))
  }
  
}

export default GetHeroesByName
