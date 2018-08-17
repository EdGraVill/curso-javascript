// Si es un sólo igual (=) es de asginación

// Igual valor independiente del tipo de dato -- Igual
// ==

// Igual valor e igual tipo de dato -- Idéntico
// ===

// Mayor qué
// >

// Menor qué
// <

// Mayor o igual qué
// >=

// Menor o igual qué
// <=

const Arturo = {
  nombre: 'Arturo',
  apellido: 'Cervantes',
  edad: 43,
  hobbie: 'Programador',
}

const Eduardo = {
  nombre: 'Eduardo',
  apellido: 'Grajales',
  edad: 24,
  hobbie: 'Programador',
}

if (Eduardo.nombre === Arturo.nombre) {
  console.log('Tienen el mismo nombre');
} else {
  console.log('Tienen diferente nombre');
}

if (Eduardo.edad === Arturo.edad) {
  console.log('Tienen la misma edad');
} else {
  console.log('Tienen diferente edad');
}

if (Eduardo.hobbie === Arturo.hobbie) {
  console.log('Tienen el mismo hobbie');
} else {
  console.log('Tienen diferente hobbie');
}

while (0 < 1) {
  console.log('Sigue siendo menor el cero que el 1');
}

for (let controlador = 0; controlador <= 10; controlador += 2) {
  console.log(controlador);
}
