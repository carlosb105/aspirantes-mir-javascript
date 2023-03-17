let pedro = {
    nombre: "Pedro Perez", Edad: 30, activo: true, hobbies: ["programar", "squash", "piano"]
}
console.log(pedro.Edad)
pedro.estatura = 1.8
delete pedro.activo
let llaves = Object.keys(pedro)
for ( let i = 0; i < llaves.length; i++){
    let llave = llaves[i];
    console.log( llave + ": " + pedro[llave])
    }
pedro.sayhi = function (){
    return ("hola, me llamo " + this.nombre)
}
console.log(pedro.sayhi())
