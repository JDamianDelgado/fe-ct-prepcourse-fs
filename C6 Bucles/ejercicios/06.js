function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  if (Math.abs(num).toString().length === 3) {
    return true;
  } else {
    return false;
  }
}

module.exports = tieneTresDigitos;
