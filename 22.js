// EJERCICIO 22
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Escribe una frase: ', (frase) => {
  for (let i = 0; i < 5; i++) {
    const desplazamiento = ' '.repeat(i * 4);
    console.log(desplazamiento + frase);
  }
  rl.close();
});