import { print } from "./utils.mjs";

const notas = [9, 8, 8, 7, 9, 5, 4, 7, 9, 10, 10, 2, 6, 4];

// Para cada item executa a função callback
notas.forEach(print)
console.log("Array original", notas)