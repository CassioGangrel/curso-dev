import { multiplier } from "./utils.mjs"


const notas = [9, 8, 8, 7, 9, 5, 4, 7, 9, 10, 10, 2, 6, 4];
const multiplierConfig = { multiplicador: 10 }

// Mapeia os valores para outro valor qualquer e armazena em um NOVO array
const notasDobradas = notas.map(multiplier, multiplierConfig)
console.log("Array original", notas)
console.log("Array apos map", notasDobradas)