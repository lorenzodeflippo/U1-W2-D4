/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2) {
  if (typeof l1 != "number" || typeof 12 !== "number") {
    return "Entrambi i parametri devono essere numeri.";
  }
  if (l1 <= 0 || l2 <= 0) {
    return "Le due lunghezze devono essere numeri positivi.";
  }
  return l1 * l2;
}
var base = 7;
var altezza = 4;
var result = area(base, altezza);
console.log("L'area del rettangolo è: " + result);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
}
var number1 = 7;
var number2 = 9;
var result = crazySum(number1, number2);
console.log("Il risultato è: " + result);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(numero) {
  var differenza = Math.abs(numero - 19);
  if (numero > 19) {
    return differenza * 3;
  } else {
    return differenza;
  }
}
var numeroFornito = 47;
var risultato = crazyDiff(numeroFornito);
console.log("Il risultato è: " + risultato);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  return (n >= 20 && n <= 100) || n == 400;
}
var number1 = 50;
result1 = boundary(number1);
var number2 = 150;
result2 = boundary(number2);
var number3 = 400;
result3 = boundary(number3);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(stringa) {
  if (stringa.startsWith("EPICODE")) {
    return stringa;
  } else {
    return "EPICODE" + stringa;
  }
}
var input1 = "EPICODER";
var result1 = epify(input1);

var input1 = "EPICODE";
var result2 = epify(input2);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(number) {
  if (number <= 0) {
    return false;
  }
  return number % 3 == 0 || number % 7 === 0;
}
var number1 = 9;
var result1 = check3and7(number1);

var number2 = 14;
var result2 = check3and7(number2);

var number3 = 5;
var result3 = check3and7(number3);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(stringa) {
  var stringaInvertita = stringa.split("").reverse().join("");
  return stringaInvertita;
}
var input = "EPICODE";
var risultato = reverseString(input);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(inputString) {
  const words = input_string.split(" ");
  const capitalizedWords = words.map((word) => {
    if (word.length > 0) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return "";
    }
  });
  const resultString = capitalizedWords.join(" ");
  return resultString;
}
const imput = "questo è un esempio di stringa";
const result5 = upperFirst(imput);
console.log(result5);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
