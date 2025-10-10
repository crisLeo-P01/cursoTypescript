import { Equipo, pilotos } from "../data/pilotos.data";

export const getPilotosByEquipos = (equipo: Equipo) => {
    const pilotosByEquipos = pilotos.filter((eq) => {
        return eq.equipo === equipo
    })

    return pilotosByEquipos
}