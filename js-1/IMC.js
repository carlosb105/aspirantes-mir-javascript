// escribe la función bmi acá
function bmi (peso, altura){
    let altelecuadrado = Math.pow(altura, 2)
    let bmi = peso/altelecuadrado
    return bmi
    
}
// código de prueba
console.log(bmi(65, 1.8)) // 20.061728395061728
console.log(bmi(72, 1.6)) // 28.124999999999993
console.log(bmi(52, 1.75)) //  16.979591836734695