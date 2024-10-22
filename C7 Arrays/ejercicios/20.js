function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  let primerElemento = array[0];
  return array.every((num) => num === primerElemento);
}

module.exports = todosIguales;
