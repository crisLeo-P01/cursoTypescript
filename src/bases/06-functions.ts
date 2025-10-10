function greet(name: string): string { // :string es el tipo de dato que retorna la función.
    return `Hola ${ name }`
}

const saludar = (name: string): string => {
    return `Saludos ${ name }`
}

const message = greet('Goku')
const message2 = saludar('Vegeta')

console.log(message);
console.log(message2);

function getUser() {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
}

const user = getUser();
console.log(user);

const getUser2 = () => {
    return {
        uid: 'ZXC456',
        username: 'revelion_7p'
    }
}

const user2 = getUser2()
console.log(user2);

// Retorno implícito -Esto es solo para funciones de una sola línea.
const bandaRock = (name: string):string => `Mi banda favorita de rock es ${name}` 

console.log(bandaRock('Foo Fighters'));

const marcaAuto = () => ({
    marca: 'Toyota',
    modelo: 'Corolla',
    year: 2020
});

console.log(marcaAuto());

// Interface para definir el tipo de dato que retorna la función
interface Producto {
    prod: string;
    descripcion: string;
    precio: number;
}

const obtenerProducto = (): Producto => {
    return {
        prod: 'SSD 1TB',
        descripcion: 'Disco duro de estado sólido',
        precio: 150
    }
}

console.log(obtenerProducto());

const myNumeros: number[] = [1,2,3,4,5];

myNumeros.forEach(function(value) {
    console.log(value * 2);
})

myNumeros.forEach((value) => console.log(value * 3));

