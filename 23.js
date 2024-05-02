// EJERCICIO 22
const filas = 10;
const columnas = 10;

for (let i = 0; i < filas; i++) {
    let fila = '';
    for (let j = 0; j < columnas; j++) {
        const numero = i * columnas + j;
        fila += (numero < 10 ? '0' : '') + numero + ' ';
    }
    console.log(fila);
}
