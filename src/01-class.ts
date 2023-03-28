const date = new Date();
date.getHours();
date.getTime();
date.toISOString();

const date2 = new Date(1993, 1, 12); // 0 enero 11 dic
date2.getHours();
date2.getTime();
date2.toISOString();

console.log(date);
console.log(date2);

let myVar;

export class MyDate {
  //TS nos obliga a inicializr los valores
  //Propiedades o atributos
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    //this apunta a la propiedad
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const myDate = new MyDate(2021, 3, 13);
console.log(myDate);
