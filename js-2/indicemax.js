// escribe la función maxIndex acá
function maxIndex (array){
    let Inmayor = array[0]
    let Indice = 0
    for(let i=1; i<array.length; i++){
        if (array[i]>Inmayor){
            Inmayor = array[i], Indice = i
        }  
    }
    if (array.length === 0){
        Indice = -1
    }
    return Indice
}
console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1