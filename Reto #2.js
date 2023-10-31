/*
 * Escribe un programa que muestre cómo transcurre un juego de tenis y quién lo ha ganado.
 * El programa recibirá una secuencia formada por "P1" (Player 1) o "P2" (Player 2), según quien
 * gane cada punto del juego.
 *
 * - Las puntuaciones de un juego son "Love" (cero), 15, 30, 40, "Deuce" (empate), ventaja.
 * - Ante la secuencia [P1, P1, P2, P2, P1, P2, P1, P1], el programa mostraría lo siguiente:
 *   15 - Love
 *   30 - Love
 *   30 - 15
 *   30 - 30
 *   40 - 30
 *   Deuce
 *   Ventaja P1
 *   Ha ganado el P1
 * - Si quieres, puedes controlar errores en la entrada de datos.
 * - Consulta las reglas del juego si tienes dudas sobre el sistema de puntos.
 */

recibirDatos(["P1", "P2", "P1", "P1", "P1", "P1", "P1", "P1"]);

function recibirDatos(secuencia) {
  const jugadores = {
    p1: 0,
    p2: 0,
  };

  const puntuaciones = {
    0: "Love",
    1: 15,
    2: 30,
    3: 40,
    4: "Ventaja ",
    5: "Ha ganado "
  }

  let result = ""

  for (player of secuencia) {
    const p = player.toLowerCase()

    if (p != "p1" && p!="p2") {
      console.log(`Dato ${p} no válido`);
      break;
    }

    jugadores[p]+=1

    const p1 = jugadores.p1
    const p2 = jugadores.p2

    console.log(p1, p2)
    if(p1<=2 && p2<=2){
      result+=`\n ${puntuaciones[p1]} - ${puntuaciones[p2]}`
    }else if(p1<=2 && p2<=3){
      result+=`\n ${puntuaciones[p1]} - ${puntuaciones[p2]}`
    }else if(p1<=3 && p2<=2){
      result+=`\n ${puntuaciones[p1]} - ${puntuaciones[p2]}`
    }
    else if(p1==3 && p2==3){
      result+=`\n Deuce`
    } else if(p1===4 && 3===p2){
      result+=`\n ${puntuaciones[p1]}P1`
    }else if(p2===4 && 3===p1){
      result+=`\n ${puntuaciones[p2]}P2`
    }else if(p1===4 && 4===p2){
      jugadores.p1--
      jugadores.p2--
      result+=`\n Deuce`
    } else if(p1===5){
      result+=`\n ${puntuaciones[p1]}P1`
      break
    }else if(p2===5){
      result+=`\n ${puntuaciones[p2]}P2`
      break
    }
  }

  console.log(result);

//   if(jugadores)
}


