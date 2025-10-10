// El type es opcional al importar. Se puede usar para indicar que solo se importa un tipo de dato.
import { heroes, type Hero } from "../data/hero.data";

// Función para obtener un héroe por su id
const getHeroById = (id: number): Hero | string | undefined => {
    const hero = heroes.find((hero) => {
        return hero.id === id
    })

    return hero ? `El héroe seleccionado es ${hero.name} de la ciudad de ${hero.city}` : `Héroe no encontrado`
}

console.log(getHeroById(1));
console.log(getHeroById(3));
console.log(getHeroById(8));