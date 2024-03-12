
import { shuffle } from 'underscore'


/**
 * esta funcion crea una nueva baraja de cartas
 * @param {Array<String>} tiposDeCartas ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} retorna una nueva baraja de cartas
 */
export const crearDeck = (tiposDeCartas, tiposEspeciales) => {

    if (!tiposDeCartas || tiposDeCartas.length === 0) throw new Error('tipos de cartas es obligatorio');

    if (!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('tipos especiales es obligatorio');

    let deck = []

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCartas) {
            deck.push(i + tipo)
        }
    }

    for (let esp of tiposEspeciales) {
        for (let tipo of tiposDeCartas) {
            deck.push(esp + tipo)
        }
    }

    return shuffle(deck);
}

/* export default crearDeck; */


