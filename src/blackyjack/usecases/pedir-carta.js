


/**
 * funcion para sacar una carta de la baraja y eliminarla del mazo
 * @param {Array<String>} deck ejemplo: ['D4', 'DQ', '5S', ...]
 * @returns {String} Devuelve una carta de baraja
 */

export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0) { //medida de seg cuando no hay nmas cartas en la baraja
        throw 'no hay cartas en el deck';
    }

    return deck.pop()
}


/* export default pedirCarta; */