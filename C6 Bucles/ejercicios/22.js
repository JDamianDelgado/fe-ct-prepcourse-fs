function combine(str1, str2, str3) {
   // Esta función debe combinar de forma alternada cada caracter de cada string.
   // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
   // Los strings pueden tener cualquier tamaño.
   // EJEMPLOS
   // combine("abc", "", "123") == "a1b2c3"
   // combine("abc", "12345", "") == "a1b2c345"
   // combine("abc", "12345", "67") == "a16b27c345"
const resultado = "";
let index1 = str1;
let index2 = str2;
let index3 = str3;

while (index1 < str1.length || index2 < str2.length || index3 < str3.length){
if (str1[index1]) {
   resultado += str1[index1];
   index1++;
}
if (str2[index2]){
   resultado += str2[index2];
   index2++;
}
if (str3[index3]){
   resultado += str3[index3];
   index3++;
}
}

}

module.exports = combine;
