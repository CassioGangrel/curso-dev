const numeros = [9, 8, 7 ,123, 231,55,1231,7564,4,123,666,-22]

// -1 || < 0 quando a form menor que b
// 0 quando forma iguais
// 1 || > 0 quando a for maior que b

const ordenados = numeros.sort((a, b) =>  b - a)

console.log(ordenados)