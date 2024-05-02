// EJERCICIO 28
function moneda() {
    const resultado = Math.random();
    
    if (resultado < 0.5) {
        return 'cara';
    } else {
        return 'cruz';
    }
}

console.log('Se esta lanzando la moneda al aire...');
const lanzamiento = moneda();
console.log(`El resultado es: ${lanzamiento}`);

