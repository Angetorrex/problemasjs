// EJERCICIO 18
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Escribe una frase: ', (frase) => {
    rl.question('Escribe la letra que quieres contar: ', (letra) => {

        letra = letra.toLowerCase();
        frase = frase.toLowerCase();

        let contador = 0;
        for (let i = 0; i < frase.length; i++) {
            if (frase[i] === letra) {
                contador++;
            }
        }

        console.log(`La letra ${letra} aparece ${contador} veces en la frase`);
        rl.close();
    });
});
