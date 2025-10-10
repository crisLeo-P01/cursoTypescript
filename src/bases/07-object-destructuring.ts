const fooFighters = {
    key: 'ABC123',
    nombre: 'Foo Fighters',
    genero: 'Rock',
    canciones: ['Everlong', 'The Pretender', 'Learn to Fly'],
}

const bonJovi = {
    key: 'ZXC789',
    nombre: 'Bon Jovi',
    genero: 'Rock',
    canciones: ['Its my life', 'Bed of Roses', 'Always', 'never say goodbye']
}

// const name = bandaRock.nombre;
// const genre = bandaRock.genero;
// const songs = bandaRock.canciones;

// Forma que que repite mucho código 👆 
// Destructuring 👇

const { nombre: fooFightersName, genero: generoFighters, canciones } = fooFighters;

console.log(fooFightersName, generoFighters, canciones);

interface Banda {
    key: string;
    nombre: string;
    genero: string;
    canciones?: string[];
}

// Destructuring en argumentos de funciones
const useContext = ({ key, nombre, genero, canciones = [] }: Banda) => {
    return {
        keyName: key,
        BandaNombre: {
            nombre, // nombre: nombre. Si la propiedad y el valor tienen el mismo nombre, se puede omitir el valor
            genero,
            canciones
        }
    }
}

const contexto = useContext(fooFighters)
console.log(contexto);

contexto.BandaNombre.canciones?.push('The Best of You')
console.log(contexto.BandaNombre);

const { nombre, genero } = bonJovi
console.log(`La banda: ${nombre}. Y su género es ${genero}`);
