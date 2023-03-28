console.log('Math.PI', Math.PI);
console.log('Math.max', Math.max(1, 2, 2, 8, 1, 0, 3, 3, 3, 3));

class MyMath {
  /**
   * la identificador static nos permite usar atributos o metodos
   * sin necesidad de una instacia de la clase
   *
   * pero si usamos atributos static estos pueden cambair su valor
   * asi que debemos colocarlos como readonly para evitar esto
   */
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => (max >= item ? max : item));
  }
}

// const math = new MyMath();
// math.PI;
console.log('MyMath.PI', MyMath.PI);
console.log('MyMath.max', MyMath.max(12, 2, 1, 1112, 9));
const numbers = [12, 2, 1, 1112, 9, 3000];
console.log('MyMath.max', MyMath.max(...numbers));
console.log('MyMath.max', MyMath.max(-1, -9, -8));
