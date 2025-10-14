import { sumar, restar, multiplicar, dividir } from './utils'
import { MAX_USUARIOS, MIN_EDAD, APP_NAME } from './constants'
import type { Usuario, Producto } from './type'

const sumaNum = sumar(40, 3)
console.log(`La suma de a + b es: `, sumaNum);

const resta = restar(15, 7)
console.log(`La resta de a - b es: `, resta);

const multiplica = multiplicar(4, 7)
console.log(`La multiplicación de a * b es: `, multiplica);

const divide = dividir(68, 8)
console.log(`La division de a y b es: `, divide);

let usuariosHoy = 40
let edadGeneral = 29

if(usuariosHoy <= MAX_USUARIOS && edadGeneral >= MIN_EDAD) {
    console.log('Todos los invitados pueden ingresar');
} else {
    console.log('Hay personas menores de edad, tienen prohibida la entrada');
}

console.log('Nombre de la app:', APP_NAME);

const usuario1: Usuario = {
    id: 'AEW48',
    nombre: 'Cristian',
    email: 'cristian@gmail.com',
    edad: 23
}

const dameDatos = ({id, nombre, email, edad}: Usuario) => ({
    keyUser: id,
    nombre,
    email,
    edad
})

const user1 = dameDatos(usuario1)
console.log(user1);

const producto1: Producto = {
    id: 'qew234',
    nombre: 'iphone 17',
    precio: 1200,
    stock: false
}

const dameInfoProducto = ({id, nombre, precio, stock}: Producto) => ({
    id,
    nombre,
    precio,
    stock
})

console.log(`Producto seleccionado: ${producto1.nombre}`);
console.log(dameInfoProducto(producto1));






