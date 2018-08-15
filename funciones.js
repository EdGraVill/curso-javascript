// Esta función ejecuta un temporizador y calcula un booleano aleatorio
function suerte(callback = () => {} /* Si el usuario no pasa nada, por default callback es una función vacía */) {
  // Una función que ejecuta un callback después de x segundos
  setTimeout(function () {
    // Una vez transcurrido el tiempo calcula un valor entre 0 y 1 aleatoriamente con Math.random() y lo redondea con Math.round()
    const valor = Math.round(Math.random());

    // Ejecuta el callback pasando como parámetro el valor representado en un booleano. si es 0, falso; si es cualquier otro, verdadero.
    callback(Boolean(valor));
  }, 3000/* 3 segundos representados en milisegundos */)
}

// Esta función recibe un boolean e imprime: Ganador si es verdadero o Perdedor si es falso
function procesarSuerte(respuesta) {
  if (respuesta === true) {
    alert('Ganador');
  } else {
    alert('Perdedor');
  }
}

// Ejecutamos procesarSuerte pasándole "true" y DE INMEDIATO sale un alert que dice "Ganador"
procesarSuerte(true);

// Ejecutamos procesarSuerte pasándole "false" y DE INMEDIATO sale un alert que dice "Perdedor"
procesarSuerte(false);

// Ejecutamos suerte sin pasarle parámetro y no pasa nada
suerte();

// Ejecutamos suerte con procesarSuerte como parámetro y DESPUES DE 3 SEGUNDOS sale un alert que puede decir "Ganador" o "Perdedor"
suerte(procesarSuerte);

// Ejecutamos suerte con un callback definido dentro del parámetro que hace lo mismo que procesarSuerte
suerte(function (respuesta) {
  if (respuesta === true) {
    alert('Ganador');
  } else {
    alert('Perdedor');
  }
});
