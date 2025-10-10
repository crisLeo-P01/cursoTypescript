export interface Hero {
    id: number;
    name: string;
    owner: Owner;
    city: City;
}

type Owner = 'DC' | 'Marvel' // type es una palabra reservada de TS para definir tipos personalizados
// otra forma de definir tipos personalizados es usando enum
export enum City {
    Gotham = 'Gotham',
    Metropolis = 'Metropolis',
    CentralCity = 'Central City',
    NewYork = 'New York'
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: 'DC',
    city: City.Gotham
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: 'Marvel',
    city: City.NewYork
  },
  {
    id: 3,
    name: 'Superman',
    owner: 'DC',
    city: City.Metropolis
  },
  {
    id: 4,
    name: 'Flash',
    owner: 'DC',
    city: City.CentralCity
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: 'Marvel',
    city: City.NewYork
  },
];