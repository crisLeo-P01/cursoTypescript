const batman = {
    name: 'Bruce',
    lastName: 'Wayne',
    age: 35,
    address: {
        street: 'Main St',
        city: 'Gotham',
    }
}

const spiderMan = structuredClone(batman); // Clonación profunda. Recomendable para objetos anidados.

spiderMan.name = 'Clark';
spiderMan.lastName = 'Kent';
spiderMan.age = 30;
spiderMan.address.street = 'Central St';
spiderMan.address.city = 'Metropolis';

const superMan = {...batman}; // Copia superficial. No es recomendable para objetos anidados.

superMan.name = 'Kal';
superMan.lastName = 'El';
superMan.age = 28;
superMan.address.street = 'Krypton St';
superMan.address.city = 'New Krypton';

console.log(batman);
console.log(spiderMan);
console.log(superMan);