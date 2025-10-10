// 1️⃣ Creamos la interfaz para tipar el retorno
interface Persona {
    nombre: string;
    edad: number;
    ciudad: string
}

// 2️⃣ Creamos la función que recibe los datos y devuelve un objeto Persona
const dameDatosPersona = (nombre: string, edad: number, ciudad: string): Persona => ({
    nombre,
    edad,
    ciudad
})

// 3️⃣ Ejemplo de uso
const persona = dameDatosPersona('Fernando', 24, 'Santa Fe')
console.log(persona)

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.ciudad);


