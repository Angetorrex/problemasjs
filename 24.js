// EJERCICIO 24
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function primo(numero) {
    if (numero < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

rl.question('Escribe un numero mayor o igual: ', (numero) => {
  if (primo(numero)) {
      console.log(`${numero} es primo`);
  } else {
      console.log(`${numero} no es primo`);
  }
  rl.close();
});
