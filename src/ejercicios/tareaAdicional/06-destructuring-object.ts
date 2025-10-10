interface Estudiante {
    id: string;
    nombre: string;
    apellido: string;
    carrera: string;
    promedio: number;
    direccion?: {
        calle: string;
        ciudad: string;
        codigoPostal: string;
    }
    materias?: string[]
}

const estudiante1: Estudiante = {
    id: 'abc123',
    nombre: 'Federico',
    apellido: 'Pérez',
    carrera: 'Ingeniero Civíl',
    promedio: 8,
    direccion: {
        calle: 'Calle Falsa 123',
        ciudad: 'Springfield',
        codigoPostal: '12345'
    },
    materias: ['Matemática', 'Física', 'Ingenieria de la información']
}

// Funcions con destructuring en los argumentos y con retorno implícito
const procesarEstudiante = ({id, nombre, apellido, carrera, promedio, materias = [], direccion}: Estudiante) => ({
    id,
    firsName: nombre,
    lastName: apellido,
    carrera,
    promedio,
    direccion,
    materias
})

const contexto = procesarEstudiante(estudiante1)
console.log(contexto);
