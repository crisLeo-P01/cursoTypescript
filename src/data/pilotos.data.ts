interface Piloto {
    id: number;
    nombre: string;
    equipo: Equipo;
    campeonatos: number;
}

export enum Equipo {
    Mercedes = 'Mercedes',
    Ferrari = 'Ferrari',
    RedBull = 'Red Bull',
    McLaren = 'McLaren',
    Alpine = 'Alpine',
    AstonMartin = 'Aston Martin',
    Williams = 'Williams'
}

export const pilotos: Piloto[] = [
    {
        id: 1,
        nombre: 'Lewis Hamilton',
        equipo: Equipo.Mercedes,
        campeonatos: 7
    },
    {
        id: 2,
        nombre: 'Sebastian Vettel',
        equipo: Equipo.Ferrari,
        campeonatos: 4
    },
    {
        id: 3,
        nombre: 'Max Verstappen',
        equipo: Equipo.RedBull,
        campeonatos: 1
    },
    {
        id: 4,
        nombre: 'Lando Norris',
        equipo: Equipo.McLaren,
        campeonatos: 0
    },
    {
        id: 5,
        nombre: 'Fernando Alonso',
        equipo: Equipo.Alpine,
        campeonatos: 2
    },
    {
        id: 6,
        nombre: 'Lance Stroll',
        equipo: Equipo.AstonMartin,
        campeonatos: 0
    },
    {
        id: 7,
        nombre: 'George Russell',
        equipo: Equipo.Williams,
        campeonatos: 0
    },
    {
        id: 8,
        nombre: 'Valtteri Bottas',
        equipo: Equipo.Mercedes,
        campeonatos: 0
    },
    {
        id: 9,
        nombre: 'Charles Leclerc',
        equipo: Equipo.Ferrari,
        campeonatos: 0
    },
    {
        id: 10,
        nombre: 'Sergio Pérez',
        equipo: Equipo.RedBull,
        campeonatos: 0
    },
    {
        id: 11,
        nombre: 'Daniel Ricciardo',
        equipo: Equipo.McLaren,
        campeonatos: 0
    },
    {
        id: 12,
        nombre: 'Esteban Ocon',
        equipo: Equipo.Alpine,
        campeonatos: 0
    }
]