function sum(array){
    let resultado = 0
    for ( let i=0; i<array.length; i++){
        resultado = array[i] + resultado
    }
    return resultado
}
console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0