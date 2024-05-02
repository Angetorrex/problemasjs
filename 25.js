// EJERCICIO 25
function romanos(numero) {
    const valores = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    
    const simbolos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    
    let resultado = '';

    for (let i = 0; i < valores.length; i++) {
        while (numero >= valores[i]) {
            resultado += simbolos[i];
            numero -= valores[i];
        }
    }

    return resultado;
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Escribe un numero: ', (numero) => {
    const numeroEntero = parseInt(numero);

    if (numeroEntero >= 1 && numeroEntero < 5000) {
        const numeroRomano = romanos(numeroEntero);
        console.log(`${numeroEntero} en numeros romanos es: ${numeroRomano}`);
    } else {
        console.log('El numero debe ser mayor o igual que 1 y menor que 5000.');
    }
    rl.close();
});

