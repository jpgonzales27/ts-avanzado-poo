/**
 * AL usar clases abstractas lo que estamos haciendo es RESTRINGIR
 * que se creen instancias de esa clase
 *
 * Y la forma de acceder a sus metodos es a traves de la herencia es
 * decir desde sus clases hijas
 */

abstract class Animal {
  constructor(protected name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  protected doSomething() {
    console.log('dooo');
  }
}

class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log(`woof! ${this.name}`);
    }
    this.doSomething();
  }

  move() {
    // code
    console.log('moving as a dog');
    super.move();
  }
}

/**
 * !no podemos hacer una instacia de la clase animal porqe esta
 * !definida como abstracta
 */

// const animal = new Animal('elite');
// animal.greeting();

/**
 * *Si podemos acceder a los metodos de animal desde la clase dog
 * *porque esta hereda los metodos y atributos de Animal
 */

const cheis = new Dog('cheis', 'nico');
cheis.greeting();
cheis.woof(2);
