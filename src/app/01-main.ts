import axios from 'axios';

import { Product } from './models/product.model';

/**
 * Para crear el modelos de los datos primero copiamos unos de los resultados
 * del array del Json y usamos alguna app para generar las interfaces de la misma
 *
 * una ves generada nuestra interfaces usamos la principal en este caso Product
 * que por debajo tambien usara Category
 *
 * ahora que importamos el modelo de Product podemos usarlo para aplicarlo como tipado
 */

(async () => {
  /**
   * Primer caso
   *
   * Tipar el metodo de axios para que nos devuelve un array que sea un array de Product
   *
   */
  async function getProducts() {
    const { data } = await axios.get<Product[]>(
      'https://api.escuelajs.co/api/v1/products'
    );
    return data;
  }

  /**
   * segundo caso
   *
   * Tipar nuestra funcion para que nos devuelve un array que sea un array de Product
   * en este caso solo estamos tipando la respuesta
   *
   * pero si necesitaramos trabajar dentro de nuestro metodo no nos ayudaria
   * podemos tipar la peticion para obtener la data ya con nuestro tipo que definimos
   *
   */
  async function getProducts2(): Promise<Product[]> {
    const { data } = await axios.get<Product[]>(
      'https://api.escuelajs.co/api/v1/products'
    );
    /**
     * como tipamos dentro de nuestra funcion TS ya entiende y nos permite acceder
     * a todos los tipos y propiedades que tiene un Producto
     */
    data.map((item) => item.title);
    return data;
  }

  /**
   * Tercer caso
   *
   * si la libreria que usaramos no tiene tipado como axios.get<Tipo>
   * podemos forzar que se trabaje como el tipo que nesitamos usando el "as Tipo"
   *
   */
  async function getProducts3() {
    const respuesta = await axios.get(
      'https://api.escuelajs.co/api/v1/products'
    );
    const data = respuesta.data as Product[];
    return data;
  }

  const products = await getProducts();
  console.log(products.map((item) => `${item.id} - ${item.title}`));
})();
