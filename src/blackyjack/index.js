
import { crearDeck, pedirCarta, valorCarta, crearCarta } from './usecases'



let deck = [];
const tipos = ['C', 'D', 'H', 'S'],
    especiales = ['A', 'J', 'Q', 'K']

let puntosJugadores = []

//referencias de html
const botonPedir = document.querySelector('#botonPedir'),
    botonDetener = document.querySelector('#botonDetener'),
    botonNuevoJuevo = document.querySelector('#botonNuevoJuego')

const puntajeComputadora = document.querySelector('#puntajeComputadora'),
    puntajeJugador = document.querySelector('#puntajeJugador');

const sectorJuegoComputadora = document.querySelector('#sectorJuegoComputadora'),
    sectorJuegoJugador = document.querySelector('#sectorJuegoJugador');

const ganadorPerdedor = document.querySelector('#ganadorPerdedor');


//funcion para inicializar el juego
const inicializarJuego = (numJugadores = 2) => {

    deck = crearDeck(tipos, especiales)
    puntosJugadores = []

    /* console.log(numJugadores); */
    for (let i = 0; i < numJugadores; i++) {
        puntosJugadores.push(0)
    }

    /* smalls.forEach(elem => elem.innerText = 0) */
    puntajeComputadora.innerText = 0;
    puntajeJugador.innerText = 0;
    /* divCartasJugadores.forEach(elem => elem.innerText = '') */
    sectorJuegoComputadora.innerText = '';
    sectorJuegoJugador.innerText = '';

    ganadorPerdedor.innerText = '';

    //parte nueva de la logica al comenzar con cartas en mano

    //cartas para el jugador
    for (let i = 0; i < 2; i++) {
        let carta = pedirCarta(deck)
        valorCarta(carta)
        crearCarta(carta, 0, sectorJuegoJugador, sectorJuegoComputadora)
        acumularPuntos(0, carta)
    }

    setTimeout(() => {
        const carta = pedirCarta(deck)
        valorCarta(carta)
        crearCarta(carta, 1, sectorJuegoJugador, sectorJuegoComputadora)
        acumularPuntos(1, carta)
    }, 500)


    botonPedir.disabled = false
    botonPedir.classList.replace('botones__boton--disabled', 'botones__boton')
    botonDetener.disabled = false
    botonDetener.classList.replace('botones__boton--disabled', 'botones__boton')


}


//funcion que acumula los puntos de cada jugador

const acumularPuntos = (posicionJugador, carta) => {

    puntosJugadores[posicionJugador] = puntosJugadores[posicionJugador] + valorCarta(carta);
    /* console.log(puntosJugadores); */
    posicionJugador === 0 ? puntajeJugador.innerText = puntosJugadores[0] : puntajeComputadora.innerText = puntosJugadores[1]
    return puntosJugadores[posicionJugador]
}



//funcion que determina quien gano y manda un mensaje

const determinarGanador = () => {

    const [puntosJugador, puntosComputadora] = puntosJugadores

    setTimeout(() => {
        if (puntosJugador <= 21 && puntosJugador > puntosComputadora) {
            /* alert('gano el jugador') */
            /* winJugador.classList.replace('ocultar', 'mostrar') */
            ganadorPerdedor.innerText = 'Ganaste 🏅'
            botonPedir.classList.replace('botones__boton', 'botones__boton--disabled')
            botonDetener.classList.replace('botones__boton', 'botones__boton--disabled')


        } else if (puntosJugador === 21 && puntosComputadora !== 21) {
            /* alert('gano el jugador') */
            /* winJugador.classList.replace('ocultar', 'mostrar') */
            ganadorPerdedor.innerText = 'Ganaste 🏅'
            botonPedir.classList.replace('botones__boton', 'botones__boton--disabled')
            botonDetener.classList.replace('botones__boton', 'botones__boton--disabled')


        } else if (puntosComputadora > 21) {
            /* alert('gana el jugador') */
            /* winJugador.classList.replace('ocultar', 'mostrar') */
            ganadorPerdedor.innerText = 'Ganaste 🏅'
            botonPedir.classList.replace('botones__boton', 'botones__boton--disabled')
            botonDetener.classList.replace('botones__boton', 'botones__boton--disabled')


        } else {
            /* winComputadora.classList.replace('ocultar', 'mostrar') */
            /* alert('gana la computadora') */
            ganadorPerdedor.innerText = 'Perdiste 😭'
            botonPedir.classList.replace('botones__boton', 'botones__boton--disabled')
            botonDetener.classList.replace('botones__boton', 'botones__boton--disabled')

        }
    }, 50);

}

//funcion delay
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}


//logica para turno de la computadora

const turnoComputadora = async () => {

    let puntosComputadora = 0;
    let puntosAVencer = puntosJugadores[0];

    while (puntosComputadora < puntosAVencer && puntosAVencer <= 21) {
        const carta = pedirCarta(deck)
        await delay(500)
        puntosComputadora = acumularPuntos(puntosJugadores.length - 1, carta)
        crearCarta(carta, puntosJugadores.length - 1, sectorJuegoJugador, sectorJuegoComputadora)
    }

    determinarGanador()

}

//EVENTOS
//escuchar un evento
botonPedir.addEventListener('click', () => {

    const carta = pedirCarta(deck)
    const puntosJugador = acumularPuntos(0, carta)

    crearCarta(carta, 0, sectorJuegoJugador, sectorJuegoComputadora)


    //si el jugador se pasa de 21 detener su juego

    /* puntosJugador > 21 ?
        botonPedir.disabled = true
        : puntosJugador === 21 ? botonPedir.disabled = true : '';; */

    if (puntosJugador > 21) {
        botonPedir.disabled = true;
        botonPedir.classList.replace('botones__boton', 'botones__boton--disabled')
        botonDetener.disabled = true;
        botonDetener.classList.replace('botones__boton', 'botones__boton--disabled')
        turnoComputadora(puntosJugador)

    } else if (puntosJugador === 21) {
        botonPedir.disabled = true;
        botonDetener.disabled = true;
        turnoComputadora(puntosJugador)
    }


})

botonDetener.addEventListener('click', () => {
    botonPedir.disabled = true
    botonPedir.classList.replace('botones__boton', 'botones__boton--disabled')
    botonDetener.disabled = true
    botonDetener.classList.replace('botones__boton', 'botones__boton--disabled')

    turnoComputadora()
})

botonNuevoJuevo.addEventListener('click', () => {
    inicializarJuego();
})

