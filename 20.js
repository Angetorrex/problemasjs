// EJERCICIO 20
function factorial(numero) {
    if (numero === 0) {
        return 1;
    }
    let resultado = 1;
    
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }

    return resultado;
}

function main() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    readline.question('Escribe el numero para calcular su factorial: ', (numero) => {
        numero = parseInt(numero);
        
        if (Number.isNaN(numero) || numero < 0) {
            console.log('Error, escribe un numero entero positivo.');
        } else {
            const resultado = factorial(numero);
            console.log(`El factorial de ${numero} es: ${resultado}`);
        }
        readline.close();
    });
}
main();
