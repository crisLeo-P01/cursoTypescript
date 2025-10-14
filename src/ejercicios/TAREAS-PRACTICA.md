# 📝 Tareas de Práctica - TypeScript

Este archivo contiene una serie de ejercicios prácticos para reforzar los conceptos aprendidos en TypeScript.

---

## 🎯 Ejercicio 1: Variables y Tipos Básicos

**Conceptos:** `let`, `const`, tipos de datos

### Tarea:
1. Crea una constante `PI` con el valor 3.14159
2. Crea una variable `radius` de tipo `number` con valor inicial 5
3. Calcula el área de un círculo (`PI * radius * radius`)
4. Calcula la circunferencia (`2 * PI * radius`)
5. Imprime ambos resultados en consola

**Pista:** Usa tipado explícito en todas las variables.

---

## 🎯 Ejercicio 2: Template Literals

**Conceptos:** Template strings, interpolación

### Tarea:
Crea una función `generarMensajeBienvenida` que reciba:
- `nombre` (string)
- `edad` (number)
- `ciudad` (string)

La función debe retornar un mensaje usando template literals:
```
"¡Hola nombre! Tienes edad años y vives en ciudad. ¡Bienvenido/a!"
```

**Extra:** Agrega lógica para cambiar "Bienvenido" o "Bienvenida" según un parámetro `genero`.

---

## 🎯 Ejercicio 3: Interfaces y Objetos

**Conceptos:** Interfaces, propiedades opcionales, objetos literales

### Tarea:
1. Crea una interfaz `Vehiculo` con:
   - `marca` (string)
   - `modelo` (string)
   - `year` (number)
   - `color` (string)
   - `precio` (number)
   - `kilometraje` (number, opcional)

2. Crea al menos 3 objetos de tipo `Vehiculo` (uno debe tener kilometraje, otro no)

3. Crea una función `mostrarInfoVehiculo` que reciba un `Vehiculo` y retorne un string con toda su información

**Extra:** Agrega una interfaz `Propietario` y relaciónala con `Vehiculo`.

---

## 🎯 Ejercicio 4: Arrays y Métodos

**Conceptos:** Arrays tipados, métodos de arrays

### Tarea:
1. Crea un array de números del 1 al 10
2. Crea un array de nombres de tus 5 películas favoritas
3. Usa `.map()` para duplicar todos los números del primer array
4. Usa `.filter()` para obtener solo los números pares
5. Usa `.find()` para encontrar la primera película que contenga la letra "a"
6. Usa `.forEach()` para imprimir cada película en consola

**Extra:** Crea una interfaz `Pelicula` con propiedades (titulo, año, director) y crea un array tipado con ella.

---

## 🎯 Ejercicio 5: Funciones Avanzadas

**Conceptos:** Funciones con tipos, retornos implícitos, arrow functions

### Tarea:
Crea las siguientes funciones:

1. `sumar`: Recibe dos números y retorna la suma
2. `multiplicar`: Recibe dos números y retorna el producto
3. `obtenerDatosPersona`: Retorna un objeto con `nombre`, `edad`, `profesion`
4. `esMayorDeEdad`: Recibe una edad y retorna un boolean
5. `calcularDescuento`: Recibe `precio` y `descuento` (%), retorna precio final

**Requisitos:**
- Usa arrow functions
- Usa retornos implícitos cuando sea posible
- Tipado explícito en parámetros y retornos
- Al menos una función debe usar una interfaz para el retorno

---

## 🎯 Ejercicio 6: Desestructuración de Objetos

**Conceptos:** Object destructuring, renombrado, valores por defecto

### Tarea:
1. Crea una interfaz `Estudiante` con:
   - `id` (string)
   - `nombre` (string)
   - `apellido` (string)
   - `carrera` (string)
   - `promedio` (number)
   - `materias` (array de strings, opcional)

2. Crea un objeto `estudiante1` con todos los datos

3. Crea una función `procesarEstudiante` que:
   - Reciba un objeto `Estudiante`
   - Use destructuring en los parámetros
   - Renombre `nombre` a `firstName` y `apellido` a `lastName`
   - Establezca un valor por defecto `[]` para `materias`
   - Retorne un nuevo objeto transformado

**Extra:** Usa destructuring anidado si agregas una propiedad `direccion` con `calle`, `ciudad`, `codigoPostal`.

---

## 🎯 Ejercicio 7: Desestructuración de Arrays

**Conceptos:** Array destructuring, rest operator, tuplas

### Tarea:
1. Crea una función `obtenerTop3` que retorne un array con los 3 mejores jugadores: `['Messi', 'Ronaldo', 'Neymar', 'Mbappé', 'Haaland']`

2. Usa destructuring para obtener:
   - El primer jugador en una variable `primero`
   - El tercer jugador en una variable `tercero`
   - Ignora el segundo

3. Crea una función `dividirArray` que retorne una tupla `[string, number]`

4. Usa destructuring para extraer ambos valores con nombres descriptivos

**Extra:** Usa el rest operator para capturar "el resto" de jugadores.

---

## 🎯 Ejercicio 8: Imports y Exports

**Conceptos:** Módulos, exportación e importación

### Tarea:
1. Crea un archivo `utils.ts` con las siguientes funciones exportadas:
   - `sumar(a: number, b: number): number`
   - `restar(a: number, b: number): number`
   - `multiplicar(a: number, b: number): number`
   - `dividir(a: number, b: number): number`

2. Crea un archivo `constants.ts` que exporte:
   - `MAX_USUARIOS = 100`
   - `MIN_EDAD = 18`
   - `APP_NAME = 'Mi App'`

3. Crea un archivo `types.ts` con interfaces exportadas:
   - `Usuario` (id, nombre, email, edad)
   - `Producto` (id, nombre, precio, stock)

4. En un archivo `main-ejercicio8.ts`, importa y usa todo lo anterior

---

## 🎯 Ejercicio 9: Promesas

**Conceptos:** Promises, resolve, reject, then, catch, finally

### Tarea:
1. Crea una función `simularCompra` que retorne una Promise que:
   - Después de 2 segundos, se resuelva con: `"Compra exitosa! Total: $150"`
   - Tenga una probabilidad de 20% de rechazarse con: `"Error: Pago rechazado"`

2. Consume la promesa usando `.then()`, `.catch()` y `.finally()`

3. Crea una función `obtenerUsuario(id: number)` que retorne una Promise:
   - Si `id > 0`, resuelve con un objeto usuario
   - Si `id <= 0`, rechaza con un mensaje de error

4. Encadena varias promesas (al menos 3 pasos)

**Extra:** Implementa `Promise.all()` para ejecutar varias promesas en paralelo.

---

## 🎯 Ejercicio 10: Fetch API

**Conceptos:** fetch, HTTP requests, manejo de respuestas JSON

### Tarea:
1. Crea una función `obtenerPokemon(nombre: string)` que:
   - Haga un fetch a: `https://pokeapi.co/api/v2/pokemon/${nombre}`
   - Retorne una Promise con los datos del Pokémon
   - Maneje errores si el Pokémon no existe

2. Crea una interfaz `Pokemon` con las propiedades que te interesen (nombre, id, peso, altura, tipos)

3. Usa la función para obtener datos de 3 Pokémon diferentes

4. Crea una función `obtenerUsuariosGitHub()` que consulte: `https://api.github.com/users`

**Extra:** Crea una función que agregue elementos al DOM con la información obtenida.

---

## 🎯 Ejercicio 11: Async/Await

**Conceptos:** async/await, manejo de errores con try/catch

### Tarea:
1. Convierte el ejercicio anterior (Fetch API) para usar `async/await` en lugar de `.then()`

2. Crea una función `obtenerDatosClima(ciudad: string)` que:
   - Sea asíncrona (`async`)
   - Use `await` para hacer fetch a una API del clima (puede ser OpenWeatherMap)
   - Use `try/catch` para manejar errores
   - Retorne un objeto con temperatura, descripción, humedad

3. Crea una función `procesarMultiplesAPIs()` que:
   - Llame a 3 APIs diferentes de forma secuencial usando `await`
   - Procese los datos de cada una
   - Retorne un objeto combinado con todos los resultados

4. Implementa `Promise.all()` con `async/await` para hacer las llamadas en paralelo

**Extra:** Agrega un timeout/cancelación a las peticiones.

---

## 🎯 Ejercicio 12: Proyecto Integrador

**Conceptos:** TODO lo aprendido

### Tarea - Sistema de Gestión de Biblioteca

Crea un sistema completo que incluya:

#### 1. Definir Tipos (`types.ts`)
```typescript
interface Libro {
    id: string
    titulo: string
    autor: string
    año: number
    genero: string
    disponible: boolean
    precio?: number
}

interface Usuario {
    id: string
    nombre: string
    email: string
    librosPrestados: string[] // IDs de libros
}
```

#### 2. Crear Funciones (`biblioteca.ts`)
- `agregarLibro(libro: Libro): void`
- `buscarLibroPorTitulo(titulo: string): Libro | undefined`
- `prestarLibro(libroId: string, usuarioId: string): Promise<string>`
- `devolverLibro(libroId: string, usuarioId: string): Promise<string>`
- `obtenerLibrosDisponibles(): Libro[]`
- `obtenerEstadisticas(): { total: number, disponibles: number, prestados: number }`

#### 3. Simular API (`api.ts`)
- Crea funciones que simulen llamadas a una API usando Promises
- Usa `setTimeout` para simular demora de red (1-2 segundos)
- Algunas peticiones deben fallar aleatoriamente

#### 4. Interfaz (`main.ts`)
- Crea una función `async` principal que:
  - Inicialice la biblioteca con datos
  - Realice operaciones (agregar, buscar, prestar, devolver)
  - Muestre resultados en consola
  - Maneje todos los errores apropiadamente

#### 5. Bonus
- Agrega un sistema de categorías/géneros
- Implementa búsqueda por múltiples criterios
- Agrega validaciones (libros duplicados, límite de préstamos, etc.)
- Crea una interfaz visual simple en HTML que consuma tu código

---

## 📚 Recursos Adicionales

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [APIs públicas para practicar](https://github.com/public-apis/public-apis)

---

## ✅ Checklist de Completación

Marca con una `x` cuando completes cada ejercicio:

- [✅] Ejercicio 1: Variables y Tipos Básicos
- [✅] Ejercicio 2: Template Literals
- [✅] Ejercicio 3: Interfaces y Objetos
- [✅] Ejercicio 4: Arrays y Métodos
- [✅] Ejercicio 5: Funciones Avanzadas
- [✅] Ejercicio 6: Desestructuración de Objetos
- [✅] Ejercicio 7: Desestructuración de Arrays
- [✅] Ejercicio 8: Imports y Exports
- [✅] Ejercicio 9: Promesas
- [✅] Ejercicio 10: Fetch API
- [✅] Ejercicio 11: Async/Await
- [ ] Ejercicio 12: Proyecto Integrador

---

## 💡 Consejos

1. **No te saltes ejercicios** - Cada uno construye sobre el anterior
2. **Escribe el código tú mismo** - No copies y pegues
3. **Experimenta** - Prueba variaciones de las soluciones
4. **Lee los errores** - TypeScript te ayuda a aprender con sus mensajes
5. **Usa console.log()** - Para verificar que tu código funciona correctamente
6. **Consulta la documentación** - Es parte del proceso de aprendizaje

---

¡Buena suerte con las prácticas! 🚀
