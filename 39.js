// EJERCICIO 39
function Tabla(paginas, filas, columnas) {
    let tabla = [];
    let contador = 1;

    for (let p = 0; p < paginas; p++) {
        let pagina = [];
        for (let f = 0; f < filas; f++) {
            let fila = [];
            for (let c = 0; c < columnas; c++) {
                fila.push(contador++);
            }
            pagina.push(fila);
        }
        tabla.push(pagina);
    }
    return tabla;
}

const paginas = 3;
const filas = 4;
const columnas = 5;
const tablaResultante = Tabla(paginas, filas, columnas);

console.log("Tabla de 3 paginas, 4 filas y 5 columnas:");
tablaResultante.forEach((pagina, index) => {
    console.log(`Pagina ${index + 1}:`);
    pagina.forEach(fila => {
        console.log(fila.join(' '));
    });
    console.log();
});
