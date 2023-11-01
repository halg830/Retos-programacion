/*
 * Escribe un programa que, dado un número, compruebe y muestre si es primo, fibonacci y par.
 * Ejemplos:
 * - Con el número 2, nos dirá: "2 es primo, fibonacci y es par"
 * - Con el número 7, nos dirá: "7 es primo, no es fibonacci y es impar"
 */

console.log(comprobar(7));

function comprobar(num) {
  let result = num;
  if(esPrimo(num)) result+=", es primo"
  else result+=", no es primo"

  if(esFibonacci(num)) result+=", fibonacci"
  else result+=", no es fibonacci"

  if(esPar(num)) result+=" y es par"
  else result+=" y es impar"

  return result
}

function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  for (var i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

function esFibonacci(num) {
  const fibonacci1 = Math.sqrt(5 * (num ^2) + 4);
  const fibonacci2 = Math.sqrt(5 * (num ^2) - 4);
  if (
    fibonacci1 === Math.round(fibonacci1) ||
    fibonacci2 === Math.round(fibonacci2)
  )
    return true;

  return false;
}

function esPar(num) {
  if (num % 2 === 0) return true;
  return false;
}
