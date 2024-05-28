function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let resultado = {};

  for (let i = 0; i < numeros.length; i++) {
    if (resultado[numeros[i]]) {
      return numeros[i];
    } else {
      resultado[numeros[i]] = true;
    }
  }
  return null;
}

module.exports = encontrarElementoRepetido;
