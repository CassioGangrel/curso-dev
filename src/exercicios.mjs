// Implementar nossas versões das funções do Array para ampliar o entendimento
const testArray = [1, 2, 3, 4, 5]

// Implementar o forEach
Array.prototype.meuForEach = function (callback, thisArgs = null) {
    for(let i = 0; i < this.length; i++) {
        const callbackBindedOnThisArgs = callback.bind(thisArgs || null)
        callbackBindedOnThisArgs(this[i], i, this)
    }
}

// equivalente a testArray.meuForEach((v, i, a) => console.log(v, i, a))
testArray.meuForEach(console.log)
console.log("-----------")


// Implementar o map
Array.prototype.meuMap = function (callback, thisArgs) {
    const newArray = []
    for(let i = 0; i < this.length; i++) {
        const valorTransformado = callback.call(thisArgs, this[i], i, this)
        newArray.push(valorTransformado)
    }
    return newArray;
}

console.log(testArray.meuMap((v, i, a) => v + i + a.length))
console.log("-----------")

// Implementar o find
Array.prototype.meuFind = function (predicato) {
    for(const item of this) {
        const pass = predicato(item)
        if (pass) {
            return item;
        }
    }
}

console.log(testArray.meuFind((v) =>  v === 3))
console.log("-----------")

// Implementar o reduce
Array.prototype.meuReduce = function(callback, defaultValue, thisArgs) {
    let previousValue = null
    for(let i = 1; i < this.length; i++) {
        previousValue = previousValue || defaultValue || this[i - 1]
        const currentValue = defaultValue && i === 1 ? defaultValue : this[i]
        const currentIndex = i 
        const array = this
        const args = [previousValue, currentValue, currentIndex, array]
        previousValue = callback.apply(thisArgs, args)
    }
    return previousValue;
}


console.log(testArray.meuReduce((v1, v2, i, a) => v1 + v2 + i + a[i]))
console.log("-----------")
console.log(testArray.reduce((v1, v2, i, a) => v1 + v2 + i + a[i]))