import { Component } from '@angular/core';
import { noop } from 'rxjs';
//import { max } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'powtorka';
}

function zad1() {

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

}
function zad2() {


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

  function max_min(arr1: any) {
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
  }

  max_min(arr1);

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
  console.log("Ile 3: " + ile3);
  arr1.sort(function (a, b) { return a - b });

  console.log(arr1);

  //let dlugos:number = arr1.length;

  if (arr1.length % 2 == 0) {
    let dlg: number = arr1.length / 2;
    console.log("mediana: " + arr1[dlg - 1] + ", " + arr1[dlg]);
  } else {

    let dlg: number = (arr1.length - 1) / 2;
    //dlg -= 0.5;
    console.log("mediana: " + arr1[dlg]);
  }


  console.log("min:" + arr1[0] + ", " + arr1[1] + ", " + arr1[2] + "max: " + arr1[arr1.length - 1] + ", " + arr1[arr1.length - 2] + ", " + arr1[arr1.length - 3]);

  let do_kw_arr1 = arr1;

  let paz: number = 0;
  let niepaz: number = 0;
  let iledziel3: number = 0;


  for (let i = 0; i < do_kw_arr1.length; i++) {
    do_kw_arr1[i] *= do_kw_arr1[i];

    if (arr1[i] % 2 == 0) {
      paz += 1;
    } else {
      niepaz += 1;
    }

    if (arr1[i] % 3 == 0) {
      iledziel3 += 1;
    }
  }

  console.log(" do kwadratu: " + do_kw_arr1 + "\n pazyste: " + paz + " niepaz: " + niepaz + "\n podzielnych przez 3: " + iledziel3);
}

function zad3() {
  console.log("zad3");

  let arrLit1: string[] = [];

  for (let i = 0; i < 10; i++) {

    let values = prompt("podaj litere do tablice");

    while (values != null && values.length != 1) {

      values = prompt("podaj litere do tablice jeszcze raz");
    }

    arrLit1.push(values ?? "");
  }
  console.log(arrLit1);


  // let word = prompt("podaj wyraz z dziesiecioma literami do tablice");

  // while(word != null && word.length != 10){

  //    word = prompt("podaj wyraz z dziesiecioma literami do tablice jeszcze raz");
  // }

  //arrLit1.push(word ?? "");


  console.log(arrLit1);

  //arrLit1.pop();
  let chararray: any = arrLit1;
  for (let i = 0; i < chararray.length; i++) {
    chararray[i] = chararray[i].charCodeAt(0);
    if (chararray[i] <= 90 || chararray >= 65) {
      chararray[i] += 32;
    }
    else {
      chararray[i] -= 32;
    }

    chararray[i] = String.fromCharCode(chararray[i]);
  }

  console.log(chararray);


  for (let i = 0; i < arrLit1.length; i++) {
    arrLit1.sort(() => Math.random() - 0.5);
  }


  console.log(arrLit1);
}

function zad4() {

  console.log("zad4");

  let arr: number[] = [];

  for (let i = 0; i < 100; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
  }
  console.log(arr);

  let ilemax: number = 0;
  let max: number = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] == max) {
      ilemax++;
    }
  }

  console.log("max: " + max + " pojawił sie :" + ilemax + " razy");

  let niepArr: number[] = [];
  let niepArr2: number[] = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      niepArr.push(arr[i]);
    }
  }

  console.log("nieparzyste: " + niepArr);

  for (let i = 1; i < arr.length; i++) {
    if (i % 2 != 0) {
      niepArr2.push(arr[i]);
    }
  }

  console.log("nieparzyste indexy: " + niepArr2);

  let liczby5_15: number = 0;
  let liczby5_15arr: number[] = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= 15 && arr[i] >= 5) {
      liczby5_15 += 1;
      liczby5_15arr.push(arr[i]);
    }
  }

  console.log("liczby w przdziale 5 -15: " + liczby5_15arr);
  let liczbaA: any = prompt("jaka liczba jest najblizej a(podaj a)");
  liczbaA *= 1;

  let ifFounded: boolean = false;
  let distance: number = Number.MAX_VALUE;
  let closestNumber: number = 0;

  for (let i = 0; i < arr.length; i++) {
    let difference = Math.abs(arr[i] - liczbaA);
    if (difference < distance) {
      distance = difference;
      closestNumber = arr[i];
    }
  }

  console.log("Najbliższa liczba to " + closestNumber);

  console.log("liczby pojawiajace sie 3 razy" );
  let count: { [key: number]: number } = {}; 

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    count[num] = (count[num] || 0) + 1;
  }
  
  for (let key in count) {
    if (count[key] === 3) {
      console.log(key);
    }
  }

  
}

function zad5(){
  let fibArr: number[] = Array(20);

  
  fibArr[0] = 0;
  fibArr[1] = 1;
  for (let i = 2; i < fibArr.length; i++) {
    fibArr[i] = fibArr[i-1] + fibArr[i-2];
  }
  
  console.log(fibArr);



  let letpowArr: number[] = Array(20); 

for (let i = 0; i < letpowArr.length; i++) {
  letpowArr[i] = Math.pow(2, i);
}

console.log(letpowArr); 


let arr3: number[] = Array(20);

let num = 3;
for (let i = 0; i < arr3.length; i++) {
  arr3[i] = num;
  num += 3;
}

console.log(arr3); 


let arr: number[] = Array(20); 

let numb = 2;
for (let i = 0; i < arr.length; i++) {
  arr[i] = numb;
  numb *= 2; 
}

console.log(arr);
}


zad5();





function sum() {

  console.log("Suma");
  let aStr: string | null = prompt('Podaj pierwszą liczbę:');
  let bStr: string | null = prompt('Podaj drugą liczbę:');
  if (aStr != null && bStr != null) {
    let a: number = parseInt(aStr);
    let b: number = parseInt(bStr);
    let result = a + b;
    console.log("Suma: " + result);
  }
}


function podstawy() {

  console.log("podstawy");

  let a: string | null = prompt('Podaj pierwszą liczbę:');
  let b: string | null = prompt('Podaj drugą liczbę:');
  if (a != null && b != null) {
    let roznica = parseInt(a) - parseInt(b);
    let iloczyn = parseInt(a) * parseInt(b);
    let iloraz = parseInt(a) / parseInt(b);


    console.log("roznica: " + roznica + " iloczyn: " + iloczyn + " iloraz: " + iloraz);
  }
}


function kalkulator() {

  console.log(" kalkulator");
  let a: string | null = prompt('Podaj pierwszą liczbę:');
  let b: string | null = prompt('Podaj drugą liczbę:');
  let operacja = prompt('Wybierz operację (+, -, , /):');
  let wynik;

  if (a != null && b != null) {
    switch (operacja) {
      case '+':
        wynik = parseInt(a) + parseInt(b);
        break;
      case '-':
        wynik = parseInt(a) - parseInt(b);
        break;
      case '':
        wynik = parseInt(a) * parseInt(b);
        break;
      case '/':
        wynik = parseInt(a) / parseInt(b);
        break;
      default:
        alert('Nieznana operacja');
        return;
    }
  };
  console.log("wynik: " + wynik);
}

function max() {

  console.log("Max");
  let a: string | null = prompt('Podaj drugą liczbę:');
  let b: string | null = prompt('Podaj pierwszą liczbę:');
  let c: string | null = prompt('Podaj drugą liczbę:');

  if (a != null && b != null && c != null) {
    let maximum = Math.max(parseInt(a), parseInt(b), parseInt(c));


    console.log("najwieksza lkiczba to: " + maximum);
  }
}
//max();

function wzrost() {

  console.log("Wzrost");

  let wzrost = prompt('Podaj swój wzrost w cm:');
  let komunikat;
  if (wzrost != null) {
    if (parseInt(wzrost) < 150) {
      komunikat = 'Jesteś niski';
    } else if (parseInt(wzrost) > 180) {
      komunikat = 'Jesteś wysoki';
    } else {
      komunikat = 'Jesteś średniego wzrostu';
    }
  }
  console.log(komunikat);
}

//wzrost();


function calculateBMI() {

  console.log("BMI");

  let height: string | null = prompt("Podaj wzrost w cm: ");
  let weight: string | null = prompt("Podaj wagę w kg: ");

  if (height != null && weight != null) {
    let bmi = parseFloat(weight) / (parseFloat(height) / 100) ** 2;

    let comment: string;
    if (bmi < 18.5) {
      comment = "za mało!";
    } else if (bmi > 25) {
      comment = "za dużo!";
    } else {
      comment = "OK!";
    }
    console.log(comment);
  }
}

//calculateBMI();

//function compareDates() {
// console.log("Starszy");
//   let birthdate1:Date = new Date(prompt("Podaj datę urodzenia osoby 1 w formacie dd/mm/yyyy: "));
//   let birthdate2:Date = new Date(prompt("Podaj datę urodzenia osoby 2 w formacie dd/mm/yyyy: "));

//   let olderPerson;
//   if (birthdate1 < birthdate2) {
//     olderPerson = "Osoba 1 jest starsza.";
//   } else if (birthdate1 > birthdate2) {
//     olderPerson = "Osoba 2 jest starsza.";
//   } else {
//     olderPerson = "Obie osoby są tak samo stare.";
//   }

//   console.log(olderPerson);

// }


// console.log("przestepny");

function isLeapyear() {
  let year: string | null = prompt("podaj rok");
  if (year != null) {
    console.log((parseInt(year) % 4 == 0 && parseInt(year) % 100 != 0) || parseInt(year) % 400 == 0);
  }
}
//isLeapyear();


function checkPasswordStrength() {
  console.log("sila");
  let password: string | null = prompt("Podaj hasło: ");
  if (password != null) {
    let strength = "słabe";
    if (password.length >= 8) {
      strength = "mocne";
    } else if (password.length >= 4) {
      strength = "średnie";
    }

    if (!password.match(/\d/)) {
      strength = "słabe (brak cyfry)";
    }
    if (!password.match(/[A-Z]/)) {
      strength = "słabe (brak dużej litery)";
    }
    if (!password.match(/[a-z]/)) {
      strength = "słabe (brak małej litery)";
    }
    if (!password.match(/[^\w\s]/)) {
      strength = "słabe (brak znaku specjalnego)";
    }

    console.log(strength);
  }
}
//checkPasswordStrength();

function checkTriangle() {
  console.log("Trojkat");

  let a: string | null = prompt('Podaj pierwszy bok:');
  let b: string | null = prompt('Podaj drugi bok:');
  let c: string | null = prompt('Podaj trzeci bok:');

  if (a != null && b != null && c != null) {
    if (parseInt(a) + parseInt(b) > parseInt(c) && parseInt(a) + parseInt(c) > parseInt(b) && parseInt(b) + parseInt(c) > parseInt(a)) {
      console.log("Z podanych boków da się utworzyć trójkąt.");
    } else {
      console.log("Z podanych boków nie da się utworzyć trójkąta.");
    }
  }
} 
//checkTriangle();
