// EJERCICIO 30

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function obtenerN(mensaje) {
    return new Promise((resolve, reject) => {
        rl.question(mensaje, (numero) => {
            const parsedNumber = parseFloat(numero);
            if (!isNaN(parsedNumber)) {
                resolve(parsedNumber);
            } else {
                reject(new Error('ERROR, introduce un nUmero valido'));
            }
        });
    });
}

function menu() {
    console.log('Seleccione una operacion:');
    console.log('1) Suma');
    console.log('2) Resta');
    console.log('3) Multiplicacion');
    console.log('4) Division');

    rl.question('Opcion: ', async (opcion) => {
        const num1 = await obtenerN('Escribe el primer numero: ');
        const num2 = await obtenerN('Eacribe el segundo numero: ');

        switch (opcion) {
            case '1':
                console.log(`La suma de ${num1} y ${num2} es: ${num1 + num2}`);
                break;
            case '2':
                console.log(`La resta de ${num1} y ${num2} es: ${num1 - num2}`);
                break;
            case '3':
                console.log(`La multiplicacion de ${num1} y ${num2} es: ${num1 * num2}`);
                break;
            case '4':
                if (num2 !== 0) {
                    console.log(`La division de ${num1} entre ${num2} es: ${num1 / num2}`);
                } else {
                    console.log('Error: No se puede dividir por cero.');
                }
                break;
            default:
                console.log('Opcion no valida.');
                break;
        }
        rl.close();
    });
}
menu();