// EJERCICIO 27
function multiplicar(numero) {
    console.log(`La tabla de multiplicar del ${numero} es:`);
    for (let i = 0; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Escribe un numero: ', (numero) => {
    const numeroentero = parseInt(numero);
    if (numeroentero >= 0 && numeroentero <= 10) {
        multiplicar(numeroentero);
    } else {
        console.log('El número debe estar entre 0 y 10.');
    }
    rl.close();
});

