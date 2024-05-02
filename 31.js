// EJERCICIO 31
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

function factorial(numero) {
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

function multiplicar(numero) {
    console.log(`la tabla de multiplicar del ${numero} es:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

rl.question('Escribe un numero: ', (numero) => {
    const num = parseFloat(numero);

    if (!isNaN(num)) {
        console.log(`Operaciones para el numero ${num}:`);
        if (primo(num)) {
            console.log(`${num} es primo`);
        } else {
            console.log(`${num} no es primo`);
        }
        console.log(`El factorial de ${num} es: ${factorial(num)}`);
        multiplicar(num);
    } else {
        console.log('ERROR, introduce un numero valido');
    }
    rl.close();
});