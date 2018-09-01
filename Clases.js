class Pokemon {
  constructor(nombre) {
    this.nombre = nombre;
    this.vida = 100;
    this.ataque = 10;
    this.defensa = 10;
  }

  static dameElModelo() {
    console.log(this.atacar);
  }

  atacar(otroPokemon) {
    console.log(`${this.nombre} atacó a ${otroPokemon.nombre} con ${otroPokemon.vida} de vida`);
    otroPokemon.vida -= this.ataque / otroPokemon.defensa;
    console.log(`${otroPokemon.nombre} ahora tiene ${otroPokemon.vida} de vida`);
  }

  saludar() {
    console.log(`El pokemon ${this.nombre} dice: ¡Hola a todos!`);
  }
}

class Pikachu extends Pokemon {
  constructor(nombre) {
    super(nombre);

    this.ataque = 15;
    this.defensa = 5;
    this.vida = 150;
    this.stamina = 1;
  }

  impactrueno(otroPokemon) {
    if (this.stamina > 0) {
      console.log(`${this.nombre} atacó CON IMPACTRUENO a ${otroPokemon.nombre} con ${otroPokemon.vida} de vida`);
      otroPokemon.vida -= (this.ataque * 2) / otroPokemon.defensa;
      console.log(`${otroPokemon.nombre} ahora tiene ${otroPokemon.vida} de vida`);
      this.stamina -= 1;

      setTimeout(() => {
        this.stamina += 1;
      }, 5000);
    } else {
      console.log(`${this.nombre} está cansado`);
    }
  }
}

class Charmander extends Pokemon {
  constructor(nombre) {
    super(nombre);

    this.ataque = 7;
    this.defensa = 15;
    this.vida = 200;
    this.stamina = 2;
  }

  lanzaLlamas(otroPokemon) {
    if (this.stamina > 0) {
      console.log(`${this.nombre} atacó CON LANZALLAMAS a ${otroPokemon.nombre} con ${otroPokemon.vida} de vida`);
      otroPokemon.vida -= (this.ataque * 3) / otroPokemon.defensa;
      console.log(`${otroPokemon.nombre} ahora tiene ${otroPokemon.vida} de vida`);
      this.stamina -= 1;

      setTimeout(() => {
        this.stamina += 1;
      }, 10000);
    } else {
      console.log(`${this.nombre} está cansado`);
    }
  }
}

const pikachu = new Pikachu('Rayito');
const charmander = new Charmander('Fueguito');

pikachu.saludar();

charmander.saludar();

pikachu.atacar(charmander);

charmander.atacar(pikachu);

pikachu.impactrueno(charmander);

pikachu.impactrueno(charmander);

charmander.lanzaLlamas(pikachu);

charmander.lanzaLlamas(pikachu);
