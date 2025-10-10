// Tuplas en TypeScript
// Las tuplas son arrays con un número fijo de elementos donde cada elemento puede tener un tipo diferente

// Ejemplo básico de tupla
const person: [string, number] = ['Juan', 25]
console.log(person);

// Acceso a elementos de la tupla
const name = person[0] // string
const age = person[1] // number

console.log(`Nombre: ${name}, Edad: ${age}`);

// Tupla con más elementos
const product: [string, number, boolean] = ['Laptop', 1200, true]
const [productName, price, inStock] = product

console.log(`Producto: ${productName}, Precio: $${price}, En Stock: ${inStock}`);

// Tupla con tipos opcionales
const user: [string, number, string?] = ['María', 30]
console.log(user);

user.push('maria@email.com') // Se puede agregar el elemento opcional
console.log(user);

// Tupla de solo lectura (readonly)
const coordinates: readonly [number, number] = [40.7128, -74.0060]
console.log(`Latitud: ${coordinates[0]}, Longitud: ${coordinates[1]}`);

// coordinates.push(100) // ❌ Error: no se puede modificar una tupla readonly
// coordinates[0] = 50 // ❌ Error: no se puede modificar

// Función que retorna una tupla
const getUserData = (): [string, number, string] => {
    return ['Carlos', 28, 'carlos@email.com']
}

const [userName, userAge, email] = getUserData()
console.log(`Usuario: ${userName}, Edad: ${userAge}, Email: ${email}`);

// Tupla con rest elements
const scores: [string, ...number[]] = ['Matemáticas', 95, 87, 92, 88]
const [subject, ...grades] = scores
console.log(`Materia: ${subject}`);
console.log(`Calificaciones: ${grades}`);

// Tuplas con labels (TypeScript 4.0+)
const employee: [name: string, age: number, department: string] = ['Ana', 32, 'IT']
console.log(employee);

// Función que retorna una tupla con as const
const getPosition = () => {
    return [10, 20] as const // Tupla de solo lectura
}

const [x, y] = getPosition()
console.log(`X: ${x}, Y: ${y}`);

// Array de tuplas
const students: [string, number, string][] = [
    ['Pedro', 20, 'Ingeniería'],
    ['Lucía', 22, 'Medicina'],
    ['Diego', 21, 'Derecho']
]

students.forEach(([name, age, career]) => {
    console.log(`${name} tiene ${age} años y estudia ${career}`);
})

// Uso práctico: Estado en React (simulación)
type UseStateReturn<T> = [T, (newValue: T) => void]

const useState = <T>(initialValue: T): UseStateReturn<T> => {
    let value = initialValue
    
    const setValue = (newValue: T) => {
        value = newValue
        console.log(`Nuevo valor: ${value}`);
    }
    
    return [value, setValue]
}

const [count, setCount] = useState(0)
console.log(`Count inicial: ${count}`);
setCount(5)
