/*
*   getHeroesByOwner => Hero[]
*   Filtra héroes por su propietario
*   @param Owner - El propietario por el cual filtrar (DC o Marvel), usar la enumeración Owner
*   @return Array de héroes pertenecientes al propietario especificado
*/

// console.log(hetHeroByOwner('Marvel'))
import { heroes, City } from "../data/hero.data"

export const getHeroesByCity = (city: City) => {
    const heroesByCiudad = heroes.filter((hero) => {
        return hero.city === city
    })

    return heroesByCiudad
}


