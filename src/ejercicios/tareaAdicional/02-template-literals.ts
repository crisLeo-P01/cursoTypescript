const generarMensajeBienvenida = (nombre: string, edad: number, ciudad: string, genero: string) => {
    let dameGenero = genero.toLowerCase();

    if(dameGenero === 'masculino') {
        return `¡Hola ${nombre}! Tienes ${edad} años y vives en ${ciudad}. Bienvenido ${nombre}!`
    } else {
        return `¡Hola ${nombre}! Tienes ${edad} años y vives en ${ciudad}. Bienvenida ${nombre}!`
    }
}

console.log(generarMensajeBienvenida('Cristian', 40, 'Manchester', 'Masculino'));

console.log(generarMensajeBienvenida('Maria Elena', 38, 'Manchester', 'femenino'));
