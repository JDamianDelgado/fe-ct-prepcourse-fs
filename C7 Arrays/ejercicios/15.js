function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let nroMayor = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > nroMayor) {
      nroMayor = array[i];
    }
  }
  return array.indexOf(nroMayor);
}
module.exports = encontrarIndiceMayor;
