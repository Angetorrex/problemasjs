// EJERCICIO 36
function Matriz(filas, columnas) {
    let matriz = [];
    for (let i = 0; i < filas; i++) {
        matriz[i] = [];
        for (let j = 0; j < columnas; j++) {
            matriz[i][j] = Math.floor(Math.random() * 100) + 1;
        }
    }
    return matriz;
}

function transponer(matriz) {
    let transpuesta = [];
    for (let i = 0; i < matriz[0].length; i++) {
        transpuesta[i] = [];
        for (let j = 0; j < matriz.length; j++) {
            transpuesta[i][j] = matriz[j][i];
        }
    }
    return transpuesta;
}

let original = Matriz(4, 5);
console.log("Matriz original:");
console.log(original);

let transpuesta = transponer(original);
console.log("Matriz transpuesta:");
console.log(transpuesta);
