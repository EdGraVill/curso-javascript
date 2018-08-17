// Arrow Functions

function nombreDeLaFuncion(parametros) {
  /* El código */
}

nombreDeLaFuncion();

// Función flecha anónima

() => {
  /* El código */
}

// Función flecha nombrada

const funcionFlecha = (parametros) => {
  /* El código */
}

funcionFlecha(parametros);

// Las funciones flecha resulta que todo lo que está después de la flecha sin corchetes se retorna

const dameUnAleatorio = () => Math.random();

// Puede haber ocaciones en que las funciones no sepan cuántos parámetros van a recibir

const multiParams = (...params) => {
  console.log(params);
}

// Resulta que todo lo que viene después de la flecha que no sean corchetes, lo retorna. Pero entonces cómo retorno un objecto, si recordemos que su sintaxis es así: { nombre: 'Eduardo', apellido: 'Grajales' }

// Si yo hago esto, me va a dar un error:

const datosPersonales = (nombre, apellido) => { nombre: nombre, apellido: apellido };

// La forma de hacerlo es la siguiente:

const datosPersonales = (nombre, apellido) => {
  // Damos un return como se de una función normal se tratase
  return { nombre: nombre, apellido: apellido };
};

// Pero la forma correcta de hacerlo:

const datosPersonales = (nombre, apellido) => ({ nombre: nombre, apellido: apellido });

// También se recomienda que en caso de recibir sólo un parámetro, se omitan los paréntesis que encierran a los parámetros. Ejemplo:

const saludame = nombre => console.log(`Hola ${nombre}`);
