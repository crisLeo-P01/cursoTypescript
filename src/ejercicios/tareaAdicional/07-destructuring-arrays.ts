const obtenerTop3 = () => {
    return ['Messi', 'Ronaldo', 'Neymar', 'Mbappé', 'Haaland']
}

const [primero, , tercero, ...resto] = obtenerTop3()

console.log('Primero: ', primero);
console.log('Tercero: ', tercero);
console.log('Resto: ', resto);

const dividirArray = (): [string, number] => {
    return ['Argentina', 3]
}

const [pais, copasGanadas] = dividirArray()
console.log('País: ', pais);
console.log('Copas ganadas: ', copasGanadas);
