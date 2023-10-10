const notas = [9, 8, 8, 7, 9, 5, 4, 7, 9, 10, 10, 2, 6, 4];

const callback = (acc, next) => acc + next;
const result = notas.reduce(callback);

console.log("original", notas);
console.log("apos reduce", result);

console.log("----------------------#-------------------------");
console.log();

class Evento {
  constructor(id, tipo, status) {
    this.id = id;
    this.tipo = tipo;
    this.status = status;
  }
}

const eventos = new Array(50).fill(null).map((_, i) => {
  const tipo = Math.round(Math.random()) === 0 ? "NOVOS" : "SEMI-NOVOS";
  const status = Math.round(Math.random()) === 0 ? "SUCESSO" : "INSUCESSO";
  return new Evento(i + 1, tipo, status);
});

eventos.push(new Evento(51, "AGENDAMENTO", "ANDAMENTO"))

// Precisa atualizar para funcionar com novo tipo e status
const valorInicial = {
  novos: { sucesso: 0, insucesso: 0 },
  semiNovos: { sucesso: 0, insucesso: 0 },
};

// Precisa atualizar para funcionar com novo tipo e status
const callbackFN = (relatorio, evento) => {
  if (evento.tipo === "NOVOS") {
    if (evento.status === "SUCESSO") relatorio.novos.sucesso += 1;
    else relatorio.novos.insucesso += 1;
  } else if (evento.tipo === "SEMI-NOVOS") {
    if (evento.status === "SUCESSO") relatorio.semiNovos.sucesso += 1;
    else relatorio.semiNovos.insucesso += 1;
  }
  return relatorio
};
const relatorio1 = eventos.reduce(callbackFN, valorInicial);

console.log(relatorio1);
console.log();

console.log("----------------------#-------------------------");
console.log();


const relatorio2 = eventos.reduce((relatorio, evento) => {
  relatorio[evento.tipo] = relatorio[evento.tipo] ?? {}
  relatorio[evento.tipo][evento.status] = relatorio[evento.tipo][evento.status] ?? 0
  relatorio[evento.tipo][evento.status] += 1;
  return relatorio;
}, {});

console.log(relatorio2);
console.log();

// Curiosidade como eu pego a chave de um objeto
const keysRelatorio2 = Object.keys(relatorio2)
console.log(keysRelatorio2);
console.log()

keysRelatorio2.forEach(key => console.log(relatorio2[key]))
console.log()