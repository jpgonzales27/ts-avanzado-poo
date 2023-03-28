/**
 * Para obtner la interfaz usando json2ts copiamos un ejemplo de la
 * respuesta que queremos convertir a interfaz
 *
 * creamos un archivo.ts nuevo
 * ctrl + alt +v
 *
 * y se genera la intefaz
 */

export interface Category {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

export interface RootObject {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: Category;
}
