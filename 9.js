// EJERCICIO 9
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Escribe un numero: ', (numero) => {
    numero = parseFloat(numero);

    if (numero > 0) {
        console.log("El numero es positivo");
    } else if (numero < 0) {
        console.log("El numero es negativo");
    } else {
        console.log("El numero es cero");
    }
    rl.close();
});