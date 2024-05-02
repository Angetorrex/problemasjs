// EJERCICIO 7
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let contador = 0;

console.log("NOTA: Si quisieras finalizar, escribe 'terminar'");
console.log("Introduce las frases que desees: ");

rl.on('line', (frase) => {
    if (frase.trim().toLowerCase() === 'terminar') {
        rl.close();
    } else {
        contador++;
        console.log(`Frase ${contador}: ${frase}`);
    }
});

rl.on('close', () => {
    console.log(`Se ingresaron ${contador} frases`);
});
