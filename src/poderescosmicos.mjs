/** 
class Pessoa {
    nome = "HUM"
}

class Americano extends Pessoa {

}

console.log(new Americano())
 */


function Pessoa() {
    this.nome = "HUM"
}

function Americano() {
    this.prototype = Pessoa.call(this)
}


console.log(new Americano().nome)
console.log(new Americano().__proto__)


Array.prototype.meuForEach = function (callback, thisArgs = null) {
    for(let i = 0; i < this.length; i++) {
        const callbackBindedOnThisArgs = callback.bind(thisArgs || null)
        callbackBindedOnThisArgs(this[i], i, this)
    }
}

