// EJERCICIO 38
function Matriz(matriz) {
    let n = matriz.length;
    let intervalo = Math.floor(n / 2);

    while (intervalo > 0) {
        for (let i = intervalo; i < n; i += 1) {
            let temp = matriz[i];
            let j;
            for (j = i; j >= intervalo && matriz[j - intervalo][0] > temp[0]; j -= intervalo) {
                matriz[j] = matriz[j - intervalo];
            }
            matriz[j] = temp;
        }
        intervalo = Math.floor(intervalo / 2);
    }
}

let matriz = [
    [5, 2, 8],
    [1, 9, 4],
    [3, 7, 6],
    [4, 5, 3],
    [2, 6, 7]
];

console.log("Matriz original:");
console.log(matriz);

Matriz(matriz);

console.log("Matriz ordenada por la primera columna:");
console.log(matriz);