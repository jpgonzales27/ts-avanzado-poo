/**
 * La interfaces son como contratos que las clases
 * que implementen esta interfaz dee cumplir y realizar
 * sus propias implementaciones de los mismos
 *
 * para implementar una interfaz debemos usar la palabra implements y el nombre
 * de la interfaz
 */

export interface Driver {
  /**
   * declaramos los atributos que deben tener las clases
   */
  database: string;
  password: string;
  port: number;

  /**
   * declaramos los metodos que deben implementar las clases
   */
  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}
// const driver: Driver = {
//   database: '',
//   password: '',
//   port: 23
// }

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number,
    /**
     * clases que implementan la interfaz pueden tener sus propios
     * atributos o metodos extras pero si o si deben cumplir con el contrato
     * que tiene con la interfaz
     */
    private host: number
  ) {}

  disconnect(): void {
    // code
  }

  isConnected(name: string): boolean {
    return true;
  }

  connect(): void {
    // code
  }
}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {
    // code
  }

  disconnect(): void {
    // code
  }

  isConnected(name: string): boolean {
    return true;
  }
}
