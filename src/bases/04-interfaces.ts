interface Country {
    name: string;
    capital: string;
    population: number;
    president?: President; // El ? indica que es opcional.
}

interface President {
    firstName: string;
    lastName: string;
    age: number
}

const argentina: Country = {
    name: "Argentina",
    capital: "Buenos Aires",
    population: 47540100,
    president: {
        firstName: 'Javier',
        lastName: 'Milei',
        age: 52
    }

}

const brasil: Country = {
    name: "Brasil",
    capital: "Brasilia",
    population: 150000000,
}

console.log(argentina);
console.log(brasil);

