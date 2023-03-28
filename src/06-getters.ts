export class MyDate {
  constructor(
    public year: number = 1993,
    public month: number = 7,
    /**
     * las propiedades privadas deben ser descrita con un guion bajo
     * delante del nombre de la propiedad  _day
     */
    private _day: number = 9
  ) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  /**
   * * los metodos get nos ayudan a obtener los valores
   * * de las propiedades privadas desde fuera de la clase
   *
   * !los metodos get SIEMPRE deben return algo sino mostrara error
   */
  get day() {
    // code
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
}

const myDate = new MyDate(1993, 7, 10);
console.log(myDate.printFormat());
// console.log(myDate.getDay());
console.log(myDate.day);
console.log('1993', myDate.isLeapYear);

const myDate2 = new MyDate(2000, 7, 10);
console.log('2000', myDate2.isLeapYear);

const myDate3 = new MyDate(2001, 7, 10);
console.log('2001', myDate3.isLeapYear);

const myDate4 = new MyDate(2004, 7, 10);
console.log('2004', myDate4.isLeapYear);
