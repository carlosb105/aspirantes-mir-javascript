let persona = {
    nombre: "Oscar",
    edad: 18,
    ciudad: "Bucaramanga",
    profesioón: "Conductor"
}
console.log(persona)
function presentación (persona){
    let mensaje = persona.nombre + " " + persona.edad + " " + persona.ciudad
    return mensaje
}
console.log(presentación(persona))
persona.hobbies = ["bailar", "jugar fútbol", "nadar"]
console.log(persona.hobbies)
for (let i = 0; i<persona.hobbies.length; i++){
        console.log(persona.hobbies[i])
    }