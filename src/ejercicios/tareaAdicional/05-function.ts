const sumar = (num1:number, num2:number): number => {
    return num1 + num2
}

console.log(sumar(7, 17));


const multiplicar = (num1:number, num2:number): number => num1 * num2;

console.log(multiplicar(5, 4));


const obtenerDatosPersona = (): {nombre: string, edad: number, profesion: string} => ({
    nombre: 'Cristian',
    edad: 40,
    profesion: 'Desarrollador web'
})

console.log(obtenerDatosPersona);

// 👆 devuelve un objeto mientras que 👇 devuelve un string

const obtenerDatosPersona2 = (nombre: string, edad: number, profesion: string) => {
    return `
        nombre: ${nombre},
        edad: ${edad},
        profesion: ${profesion}
    `
}

console.log(obtenerDatosPersona2('Matias', 32, 'Diseñador'));

const esMayorDeEdad = (edad: number):boolean => {
    return edad >= 18;
}

console.log(esMayorDeEdad(17));


interface ResultadoDescuento {
    precioOriginal: number,
    precioDescuento: number,
    precioFinal: number
}

const calcularDescuento = (precio: number, descuento: number): ResultadoDescuento => {
    const precioDescuento = precio * (descuento / 100)
    const precioFinal = precio - precioDescuento

    return {precioOriginal: precio, precioDescuento, precioFinal}
}

console.log("Descuento aplicado: ", calcularDescuento(1000, 20));



