const notas = [{ nota: 10 }, { nota: 8 },{ nota: 6 },{ nota: 3 },{ nota: 7 }]

const predicato = (value) => value.nota <= 8
const maiorQue8 = notas.filter(predicato)

console.log(maiorQue8)

