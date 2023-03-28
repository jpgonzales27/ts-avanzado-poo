import axios from 'axios';

/**
 * para usar await ncesitamos un cotexto asyncro por eso
 * creamos de nuevo la funcion que se ejecuta sola y la
 * definimos como async
 */

(async () => {
  function delay(time: number) {
    /**
     * Si dejamos que nuestra Promise sin especifcar su contenido nos
     * dira que es Promise<unknown>
     *
     * En este caso estamos especificando que esta promesa va a retorna un string
     * por eso definimoa como Promise<string>
     */
    const promise = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('string');
      }, time);
    });
    return promise;
  }

  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }

  /**
   * Toda funcion que tenga la palabra async retorna una promesa
   * y nos permite usar el await dentro de la funcion para directamente
   * resolver la promesa y retornar el resultado que por el uso de
   * axios esta en el propiedad data
   */
  async function getProductsAsync() {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rta.data;
  }

  console.log('---'.repeat(10));
  /**
   * Como la funcion nos retorna una Promise al usar await
   * deja de ser una promesa y obtenemos solo el resultado
   * de la misma
   */
  const rta = await delay(3000);
  /**
   * Al definir que la promesa retorna un tipo de dato especifico
   * TS nos brindara todoas las opciones para ese tipo de dato
   */
  console.log(rta.toUpperCase());

  console.log('---'.repeat(10));
  const products = await getProducts();
  /**
   * Al usar axios para obtener la informacion de la peticion debemos
   * ingresar a la propiedad "data"
   */
  console.log(products.data);

  console.log('---'.repeat(10));
  /**
   * debemos hacer uso de await porque estamos llamnado a funciones que
   * retornan una promesa ya sea de manera explicita (getProductsAsync)
   * o implicita (getProducts)
   */
  const productsv2 = await getProductsAsync();
  console.log(productsv2);
})();
