const notas = [{ nota: 10 }, { nota: 8 },{ nota: 6 },{ nota: 3 },{ nota: 7 }]

const predicato = (value ) => value.nota === 6

const index = notas.findIndex(predicato)
console.log(index)

const item = notas.find(predicato)

console.log(item)