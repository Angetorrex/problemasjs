// EJERCICIO 26
const readline = require('readline');
const { stdout } = require('process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Escribe una frase: ', (frase) => {
    const anchoTerminal = stdout.columns;

    const espacios = Math.floor((anchoTerminal - frase.length) / 2);

    const espaciosAntes = ' '.repeat(espacios);

    console.log(espaciosAntes + frase);

    rl.close();
});

