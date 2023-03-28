export class MyDate {
  /**
   * Si no se define explicitamente el acceso publico
   * TS por lo pone por defecto
   */
  public year: number;
  month: number;
  /**
   * Podriamos colocar la propiedad como "readonly" pero
   * eso generaria el problema que no puede ser cambiado
   * desde afuera pero tampoco desde dentro de la clase
   */
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  public printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }
}

const myDate = new MyDate(1993, 7, 9);
console.log(myDate.day);
myDate.day = 12;
console.log(myDate.day);
