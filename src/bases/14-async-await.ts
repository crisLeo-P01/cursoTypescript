import type { GiphyRandomResponse } from '../data/giphy.response'

const API_KEY = 'HBNJnEMyiPf2NYHg36BPa411HslNpWAm'

const createImageInsideDOM = (url:string) => {
    const imgElement = document.createElement('img')
        imgElement.src = url

        document.body.append(imgElement)
}

/*  El await solo se puede usar dentro de funciones marcadas como async
*   y sirve para "esperar" de forma no bloqueante a que una promesa se resuelva
*   simplificando la escritura del código asíncrono.
*/ 
const getRandomGifUrl = async (): Promise<string> => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ API_KEY }`)
    
    const { data } : GiphyRandomResponse = await response.json()

    return data.images.original.url
}

getRandomGifUrl().then(createImageInsideDOM)
// 👆 hace lo mismo que 👇
// getRandomGifUrl().then((url) => createImageInsideDOM(url))