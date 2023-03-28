/**
 * Creamos la clase animal que tiene
 * una propiedad para darle un nombre
 * y 2 metodos para moverser y saludar
 *
 * esta clase sera la que heredara todos su atributos y metods
 * a las clases hijas
 */
export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

/**
 * para definir una herencia usamos la palabra "extends" y el nombre de la
 * clase padre del cual heredaremos todos su atributos y metods
 *
 * pero la clase hija en este caso Dog puede añadir sus propios atributos y metodos
 */
export class Dog extends Animal {
  /**
   * en el metodo constructor pasaran varias cosas
   *
   * primero como estamos heredando de animal tambien heredamos su constrcutor
   * pero en este caso estamos agrengando un nueva propiedad a nuestro perro
   * que es el owner(dueño) y lo queremos definir de forma corta
   * para ello debemos definiar su ambito public
   *
   * pero como nuestro animal tiene un nombre en su constructor debemos hacer uso
   * del super que hace referencia al constructor del padre y por ello no debemos
   * colocar ningun ambito de public o private porque si lo hacemos es como que
   * estariamos definiendo una propiedad mas para el perro el cual pasaria a tener
   * 2 propiedasdes name la del animal(clase padre) y la del perro(clase hija)
   *
   * para evitar esto solo basta con referenciar la propiedad del padre sin public o private
   *
   */
  constructor(name: string, public owner: string) {
    super(name);
  }

  /**
   * metodo propio solo de la clase hija
   */
  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('woof!');
    }
  }
}

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());

const cheis = new Dog('cheis', 'nico');
cheis.move();
console.log(cheis.greeting());
cheis.woof(5);
console.log(cheis.owner);
