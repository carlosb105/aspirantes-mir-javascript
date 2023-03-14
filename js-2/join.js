function join (array){
    let items = ""
    for ( let i=0; i < array.length; i++){
        items = items + array[i] + " "
    }
    return items
}
console.log(join(["yo soy", "carlos", "eduardo", 5]))