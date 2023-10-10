export function print(value, index, selfArr) {
  console.log("Valor: ", value, "Index: ", index, "Array Size: ", selfArr.length);
}

export function double(value) {
  return `Original: ${value} Dobro: ${value * 2}`;
}

export function multiplier(v) {
  return v * this.multiplicador
}

const Util = {
  double,
  multiplier,
  print
}

export default Util