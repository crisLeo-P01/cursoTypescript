interface Pokemon {
    id: number;
    nombre: string;
    peso: number;
    altura: number;
    tipos: string[]
}

const mostrarInfoPokemon = (nombre: string, peso: number) => {
    const nombrePokemon = document.createElement('p')
    const pesoPokemon = document.createElement('p')
    nombrePokemon.textContent = nombre
    pesoPokemon.textContent = peso.toString()

    nombrePokemon.textContent = `Nombre: ${nombre}`;
    pesoPokemon.textContent = `Peso: ${peso}`;

    document.body.append(nombrePokemon, pesoPokemon)
}

const obtenerPokemon = async (nombre: string): Promise<Pokemon> => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`)

        if(!response.ok) {
            throw new Error(`❌ No se encontro el pokemon ${nombre}`)
        }

        const data = await response.json()

        const pokemon: Pokemon = {
            id: data.id,
            nombre: data.name,
            peso: data.weight,
            altura: data.height,
            tipos: data.types.map((t: any) => t.type.name)
        }

        return pokemon
    } catch (err) {
        throw err
    }
}

const mostrarPokemon = async () => {
    try {
        const pikachu = await obtenerPokemon('pikachu')
        const charizard = await obtenerPokemon('charizard')
        const bulbasaur = await obtenerPokemon('bulbasaur')

        console.log('✅ Pokemones encontrados');
        console.log(pikachu);
        console.log(charizard);
        console.log(bulbasaur);       
        
        mostrarInfoPokemon(pikachu.nombre, pikachu.peso)
        mostrarInfoPokemon(charizard.nombre, charizard.peso)
        mostrarInfoPokemon(bulbasaur.nombre, bulbasaur.peso)
    } catch (err) {
        throw err
    }
}

mostrarPokemon()

interface UserGitHub {
    id: number;
    nombre: string;
    avatar: string
}

const obtenerUserGitHub = async (id: number): Promise<UserGitHub> => {
    try {
        const response = await fetch(`https://api.github.com/users/${id}`)

        if (!response.ok) {
            throw new Error(`No se encontro el usuario con el id ${id}`)
        }

        const data = await response.json()

        const user: UserGitHub = {
            id: data.id,
            nombre: data.login,
            avatar: data.avatar_url
        }

        return user
    } catch(err) {
        throw err
    }
}

const mostrarUser = async () => {
    try {
        const user1 = await obtenerUserGitHub(1)

        console.log('✅ Usuario encontrado');
        console.log(user1);        
    } catch (err) {
        throw err
    }
}

mostrarUser()