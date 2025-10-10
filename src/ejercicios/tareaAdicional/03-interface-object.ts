
interface Vehiculo {
    marca: string;
    modelo: string;
    year: number;
    precio: number;
    kilometraje?: number;
    propietario: Propietario
}

interface Propietario {
    duenioVehiculo: string
}

const vehiculoUno: Vehiculo = {
    marca: 'Toyota',
    modelo: 'Yaris',
    year: 2023,
    precio: 25000,
    kilometraje: 200,
    propietario: {
        duenioVehiculo: 'Emiliano'
    }
}

const vehiculoDos: Vehiculo = {
    marca: 'Peuogeot',
    modelo: '206',
    year: 2002,
    precio: 11800,
    kilometraje: 45000,
    propietario: {
        duenioVehiculo: 'Cristian'
    }
}

const vehiculoTres: Vehiculo = {
    marca: 'Ferrari',
    modelo: 'F40',
    year: 1997,
    precio: 220000000,
    propietario: {
        duenioVehiculo: 'Lionel'
    }
}


const mostrarInfoVehiculo = (vehiculo: Vehiculo) => {
    if(!vehiculo.kilometraje) {
        return `
            La marca del vehículo es ${vehiculo.marca} y su modelo es ${vehiculo.modelo}. 
            Tiene un precio de ${vehiculo.precio} dólares. No se especifíca kilometraje.
            El propietario es de ${vehiculo.propietario.duenioVehiculo}
            `
        }
        
        return `
        La marca del vehículo es ${vehiculo.marca} y su modelo es ${vehiculo.modelo}. 
        Tiene un precio de ${vehiculo.precio} dólares. Cuenta con un kilometraje de: ${vehiculo.kilometraje} Kilómetros.
        El propietario es de ${vehiculo.propietario.duenioVehiculo}
    `
}

console.log(mostrarInfoVehiculo(vehiculoUno));
console.log(mostrarInfoVehiculo(vehiculoDos));
console.log(mostrarInfoVehiculo(vehiculoTres));
