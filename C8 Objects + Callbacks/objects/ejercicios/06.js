const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let contador = 0;
  for (propiedad in objeto) {
    if (objeto.hasOwnProperity(propiedad)) {
      contador++;
    }
  }
  return contador;
};

module.exports = contarPropiedades;
