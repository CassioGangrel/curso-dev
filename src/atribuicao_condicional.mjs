{
  console.log("Valores considerados falsy");
  const valor0 = undefined || 0 || 1;
  const valor1 = null || 0;
  const valor2 = "" || 1;
  const valor3 = false || 1;
  const valor4 = 0 || 1;

  console.log(valor0, valor1, valor2, valor3, valor4);
}

{
  console.log("Valores considerados truly");
  const valor0 = " " || 0;
  const valor1 = "com valor" || 0;
  const valor2 = 1 || 0;
  const valor3 = true || 0;
  const valor4 = -1 || 0;
  const valor5 = {} || 0;
  const valor6 = [] || 0;
  const valor7 = () => null || 0;

  console.log(valor0, valor1, valor2, valor3, valor4, valor5, valor6, valor7);
}

{
  // usando o && ficamos com o valor da esqueda se este for false e com o da direita se for true
  const valor1 = 20 && "ele";
  console.log(valor1);
}

{
  // Operador de coalescência nula
  // somente retorna o valor da direita se o da esquerda for null ou undefined
  const foo = null ?? "default string";
  console.log(foo);
  // Expected output: "default string"

  const baz = 0 ?? 42;
  console.log(baz);
  // Expected output: 0
}
