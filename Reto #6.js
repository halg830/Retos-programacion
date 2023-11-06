/*
 * Crea un programa que calcule quien gana más partidas al piedra,
 * papel, tijera, lagarto, spock.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "🗿" (piedra), "📄" (papel),
 *   "✂️" (tijera), "🦎" (lagarto) o "🖖" (spock).
 * - Ejemplo. Entrada: [("🗿","✂️"), ("✂️","🗿"), ("📄","✂️")]. Resultado: "Player 2".
 * - Debes buscar información sobre cómo se juega con estas 5 posibilidades.
 */

console.log(juego([["🗿","✂️"], ["✂️","🗿"], ["📄","✂️"]]));

function juego(jugadas) {
  const posibilidades = { "🗿": 0, "📄": 1, "✂️": 2, "🦎": 3, "🖖": 4 };
  let p1 = 0;
  let p2 = 0;
  let result = ""

  jugadas.forEach((j) => {
    j1 = posibilidades[j[0]];
    j2 = posibilidades[j[1]];
  
    // if pierde j1
    if (j1 === 0 && j2 === 1 || j2===4) p2++ 
    else if (j1 === 1 && j2 === 2 || j2===3) p2++
    else if (j1 === 2 && j2 === 0 || j2===4) p2++
    else if (j1 === 3 && j2 === 0 || j2===2) p2++
    else if (j1 === 4 && j2 === 1 || j2===3) p2++
    else p1++    
  });

  if (p1>p2) result="Gana el jugador 1"
  else if (p1<p2) result="Gana el jugador 2"
  else result = "Empate"

  return result
}
