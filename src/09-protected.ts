export class Animal {
  /**
   * el identificador protected nos permite proteger que
   * nuestros atributos no sean accedidos desde afuera de la clase
   * pero si pueden ser accedidos desde la clase hijas (heredadas)
   *
   * el identificador private no permite que sean accedidos desde fuera de la clase
   * ni desde las clases hijas(heredadas)
   */
  constructor(protected name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  /**
   * Tambien podemos crear metodos protected para perminter que solo sean
   * vistos desde las clases hijas
   */
  protected doSomething() {
    console.log('dooo');
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log(`woof! ${this.name}`);
    }
    this.doSomething();
  }
  /**
   * Tambien podemos sobreescribir la funcionalidad de un metodo
   * y hacer nuestra propia aplicacion del mismo en las clase hija
   *
   * pero si quisieramos acceder a la funcionalidad del metodo en
   * la clase padre debemos hacer uso del super y el nombre del metodo
   */
  move() {
    // code
    console.log('moving as a dog');
    super.move();
  }
}

const cheis = new Dog('cheis', 'nico');
// cheis.name = 'otro nombre';
cheis.woof(1);
// cheis.doSomething();
cheis.move();
