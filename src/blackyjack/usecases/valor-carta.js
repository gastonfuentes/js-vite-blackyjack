

/**
 * funcion para conocer el valor de la carta
 * @param {String} carta ejemplo '5S'
 * @returns {Number} devuelve el valor de la carta
 */

export const valorCarta = (carta) => {

    if (!carta || typeof (carta) !== 'string') throw new Error('mandar una carta de tipo String')

    let valor = carta.substring(0, carta.length - 1) //substring= metodo para cortar los string

    /*  if (isNaN(valor)) { //pregunta si no es un numero
         console.log('no es un numero');
         valor = valor === 'A' ? 11 : 10;
     } else {
         console.log('es un numero');
         valor = valor * 1
     } */

    return isNaN(valor) ?
        valor = valor === 'A' ? 11 : 10
        : valor = valor * 1
}
/* export default valorCarta; */

