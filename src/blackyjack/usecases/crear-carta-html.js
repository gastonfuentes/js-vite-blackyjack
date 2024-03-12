
/**
 * funcion para mostrar las cartas que van saliendo
 * @param {String} carta parametro carta
 * @param {Number} posicion posicion si es el jugador o la computadora
 * @param {HTMLElement} sectorJuegoJugador elemento html adonde se va a colocar la carta
 * @param {HTMLElement} sectorJuegoComputadora idem anterior
 */

export const crearCarta = (carta, posicion, sectorJuegoJugador, sectorJuegoComputadora) => {

    const imgCarta = document.createElement('img') //creamos una etiqueta img
    imgCarta.src = `assets/cartas/${carta}.png` //le añadimos el src con la carta que obtuvimos
    imgCarta.classList.add('carta') //le agregamos las clases de css necesarias
    posicion === 0 ? sectorJuegoJugador.append(imgCarta) : sectorJuegoComputadora.append(imgCarta) //insertamos la carta creada en el div correspondiente

}

