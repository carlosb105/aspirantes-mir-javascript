let receta = {}
receta.nombre = "sandwich"
receta.ingredientes = []
receta.ingredientes.push({nombre: "Pan", cantidad: 2})
receta.ingredientes.splice(2, 0, {nombre: "Queso", cantidad: 1})
console.log(receta.ingredientes[0].nombre)
console.log(receta.ingredientes[0].cantidad + receta.ingredientes[1].cantidad)