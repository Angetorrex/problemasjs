// EJERCICIO 15
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function par(numero) {
    return numero % 2 === 0;
}

rl.question('Escribe el primer numero: ', (numero1) => {
    rl.question('Escribe el segundo numero: ', (numero2) => {
        const num1 = parseInt(numero1);
        const num2 = parseInt(numero2);

        let contador = 0;
        let contadorPares = 0;
        let sumaImpares = 0;

        console.log(`Los numeros naturales entre ${num1} y ${num2}:`);
        for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
            console.log(i);
            contador++;

            if (par(i)) {
                contadorPares++;
            } else {
                sumaImpares += i;
            }
        }

        console.log(`El total de numeros naturales es: ${contador}`);
        console.log(`El total de numeros pares es: ${contadorPares}`);
        console.log(`La suma de los numeros impares es: ${sumaImpares}`);
        rl.close();
    });
});

