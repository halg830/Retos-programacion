/*
 * Escribe un programa que sea capaz de generar contraseñas de forma aleatoria.
 * Podrás configurar generar contraseñas con los siguientes parámetros:
 * - Longitud: Entre 8 y 16.
 * - Con o sin letras mayúsculas.
 * - Con o sin números.
 * - Con o sin símbolos.
 * (Pudiendo combinar todos estos parámetros entre ellos)
 */

// Mi forma
function generarContraseña() {
  const date = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2);

  return date + random;
}

console.log(generarContraseña());

// La de chat
function generateRandomPassword(
  length,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_-+=<>?";

  let validChars = lowercaseChars;

  if (includeUppercase) {
    validChars += uppercaseChars;
  }

  if (includeNumbers) {
    validChars += numberChars;
  }

  if (includeSymbols) {
    validChars += symbolChars;
  }

  let password = "";
  const charLength = validChars.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charLength);
    password += validChars.charAt(randomIndex);
  }

  return password;
}

function generateRandomPasswordWithOptions(options) {
  const { length, includeUppercase, includeNumbers, includeSymbols } = options;

  if (length < 8 || length > 16) {
    return "La longitud debe estar entre 8 y 16";
  }

  return generateRandomPassword(
    length,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
}

// Ejemplo de uso:
const passwordOptions = {
  length: 12, // Longitud de la contraseña
  includeUppercase: true, // Incluir letras mayúsculas
  includeNumbers: true, // Incluir números
  includeSymbols: true, // Incluir símbolos
};

const generatedPassword = generateRandomPasswordWithOptions(passwordOptions);
console.log(generatedPassword);
