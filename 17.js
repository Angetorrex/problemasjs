// EJERCICIO 17
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Escribe el primer numero: ', (numero1) => {
    rl.question('Escribe el segundo numero: ', (numero2) => {
        const num1 = parseInt(numero1);
        const num2 = parseInt(numero2);

        let contadorMultiplos = 0;
        let sumaMultiplos = 0;

        if (num2 >= num1) {
            console.log(`Los multiplos de 2 entre ${num1} y ${num2} es:`);
            for (let i = num1; i <= num2; i++) {
                if (i % 2 === 0) {
                    console.log(i);
                    contadorMultiplos++;
                    sumaMultiplos += i;
                }
            }

            console.log(`El total de multiplos de 2 es: ${contadorMultiplos}`);
            console.log(`La suma de los multiplos de 2 es: ${sumaMultiplos}`);
        } else {
            console.log("El segundo numero debe ser mayor o igual que el primero");
        }
        rl.close();
    });
});