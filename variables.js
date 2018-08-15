// Inmutables - Puros

const string = 'Texto';
const number = 20;
const boolean = false;
const undefined = undefined;
const null = null

// Mutables - Impuros

const object = {
  name: 'Eduardo',
  lastName: 'Grajales',
};

const array = [0, 1, 2, 3];

const function = function(val) {
  console.log(val);
}


const personalData = {
  name: 'Eduardo',
  lastName: 'Grajales',
  age: 24,
  male: true,
  address: {
    street: 'Río Orizaba',
    extNumber: 100,
    intNumber: null,
    city: 'Orizaba',
    state: 'Veracruz',
    country: 'México',
  },
  skills: ['js', 'html', 'css', 'nodejs'],
  addressString() {
    const {
      street,
      extNumber,
      intNumber,
      city,
      state,
      country,
    } = this.address;

    return `${street}, ${extNumber}. ${city}, ${state}. ${country}`;
  },
};
