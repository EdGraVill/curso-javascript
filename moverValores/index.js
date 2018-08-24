const planetas = {
  mercurio: {
    peso: 0,
    tasa: .3,
    inputDOM: undefined,
  },
  venus: {
    peso: 0,
    tasa: .9,
    inputDOM: undefined,
  },
  tierra: {
    peso: 0,
    tasa: 1,
    inputDOM: undefined,
  },
  marte: {
    peso: 0,
    tasa: .3,
    inputDOM: undefined,
  },
  jupiter: {
    peso: 0,
    tasa: 2.1,
    inputDOM: undefined,
  },
  saturno: {
    peso: 0,
    tasa: 1,
    inputDOM: undefined,
  },
  urano: {
    peso: 0,
    tasa: .9,
    inputDOM: undefined,
  },
  neptuno: {
    peso: 0,
    tasa: 1.1,
    inputDOM: undefined,
  },
}

const setValues = (callback) => {
  const nombrePlanetas = Object.keys(planetas); // ['mercurio', 'venus', 'tierra', etc...]

  nombrePlanetas.forEach((nombre) => {
    planetas[nombre].inputDOM = document.getElementById(nombre);
  });

  if (callback) callback();
};

const calcular = (name, value) => {
  const { tasa } = planetas[name];

  const valor = tasa === 1 ? value : value / tasa;

  Object.keys(planetas).forEach((nombrePlaneta) => {
    planetas[nombrePlaneta].peso = planetas[nombrePlaneta].tasa * valor;
    planetas[nombrePlaneta].inputDOM.value = Math.round(planetas[nombrePlaneta].peso * 100) / 100;
  });
};

setValues(() => {
  Object.keys(planetas).forEach((nombre) => {
    planetas[nombre].inputDOM.onkeyup = (event) => {
      const { key, currentTarget } = event;

      if (!Number.isNaN(Number(key))) {
        calcular(currentTarget.name, currentTarget.value);
      } else {
        event.preventDefault();
      }
    }
  });
});
