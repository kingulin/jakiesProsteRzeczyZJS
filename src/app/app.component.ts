import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'powtorka';
}

console.log("zad1");

let tab1 = [7, 3, 1, 6, 9, 5, 4, 10, 2, 2];

console.log(tab1[4] + "," + tab1[6]);

tab1[6] = 12;
console.log(tab1[6]);

let tab2 = tab1;

console.log(tab2);

let tab3 = [];

for (let i = 0; i < tab2.length; i++) {
  tab3.push(tab1[i] + tab2[i]);
}
console.log(tab3);

tab2.reverse();
console.log(tab2);

console.log("zad2");


let arr1: number[] = []
let ile_liczb_podac = prompt("ile liczb ma byc w tablcy?");
if (ile_liczb_podac != null) {

  for (let i = 0; i < parseInt(ile_liczb_podac); i++) {

    let values = prompt("podaj liczbe do tablice");
    arr1.push(parseInt(values ?? ""));
  }
}
console.log(arr1);


let min: number = arr1[0];
let max: number = arr1[0];
for (let i = 1; i < arr1.length; i++) {
  if (arr1[i] < min) {
    min = arr1[i];
  }
  if (arr1[i] > max) {
    max = arr1[i];
  }
}
console.log("max: " + max + " min: " + min);
let suma: number = 0;
for (let i = 0; i < arr1.length; i++) {
  suma += arr1[i];

}
suma /= arr1.length;
console.log("srednia: " + suma);

let ile3: number = 0;
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] == 3) {
    ile3++;
  }
}
console.log("le 3: " + ile3);
arr1.sort();

console.log(arr1);

//let dlugos:number = arr1.length;
if (arr1.length % 2 == 0) {
  let dlg: number = arr1.length / 2;
  console.log("mediana: " + (arr1[dlg] + arr1[dlg - 1]) / 2);
} else {
  
  let dlg: number = arr1.length / 2;
  dlg -= 0.5;
  console.log("mediana: " + arr1[dlg]);
}
// console.log("zad3");
// let tabLit1[10];