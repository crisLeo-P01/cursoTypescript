interface Producto {
    producto: string;
    precio: number
}

const simularCompra = (producto: string, precio: number): Promise<Producto> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(precio > 0) {
                resolve({
                    producto,
                    precio
                })
            } else {
                reject('Su compra debe ser mayor a 0')
            }
        }, 2000)
    })
}

simularCompra('iphone', 400)
    .then((prod) => console.log(`Compra exitosa. Producto: ${prod.producto}. Precio: ${prod.precio}`))
    .catch((err) => console.log('Se produjo un error: ', err))
    .finally(() => console.log('Compra finalizada'))


interface Usuario {
    id: number;
    nombre: string;
    email: string
}

const obtenerUsuario = (id: number, nombre: string, email: string): Promise<Usuario> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(id > 0) {
                resolve({
                    id,
                    nombre,
                    email
                })
            } else {
                reject('Un usuario no puede contener 0 o número negativo')
            }
        }, 4000)
    })
}

obtenerUsuario(0, 'Cristian', 'cristian@gmail.com')
    .then((user) => {
        console.log(`Usuario registrado. Nombre: ${user.nombre}. Email: ${user.email}`);
    })
    .catch((err) => console.error('ERROR: ', err))