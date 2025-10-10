const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const peliculas: string[] = [
    'The Joker',
    'Batman',
    'The Pursuit of Happyness',
    'Toy Story',
    'The Founder'
];

// MAP()
const numeroDuplicado: number[] = numeros.map((num) => {
    return num * 2
})

console.log(numeroDuplicado);

// FILTER()
const numeroPares = numeros.filter((num) => {
    return num % 2 === 0
})

console.log(numeroPares);

// FIND()
const movieContainA = peliculas.find((letra) => letra.includes('a'))

console.log(movieContainA);

peliculas.forEach((movie) => console.log(movie));

interface Pelicula {
    titulo: string;
    anio: number;
    director: string
}

const listasPeliculas: Pelicula[] = [
    { titulo: 'The Joker', anio: 2021, director: 'Todd Phillips' },
    { titulo: 'Batman inicia', anio: 2005, director: 'Christopher Nolan' },
    { titulo: 'The Pursuit of Happyness', anio: 2006, director: 'Gabriele Muccino' },
    { titulo: 'Toy Story', anio: 1995, director: 'John Lasseter' },
    { titulo: 'The Founder', anio: 2016, director: 'John Lee Hancock' }
]

listasPeliculas.forEach((movie) => {
    console.log(`
        Título: ${movie.titulo}.
        Año: ${movie.anio}.
        Director: ${movie.director}
    `)
})


