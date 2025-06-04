/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const a = 20;
const b = 25;

if (a > b) {
  console.log(a + " è il più grande");
} else {
  console.log(b + " è il più grande");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num1 = 25;

if (num1 !== 5) {
  console.log("not equal");
} else {
  console.log("equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (num1 % 5 === 0) {
  console.log(num1 + " è divisibile per 5");
} else {
  console.log(num1 + " non è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const val1 = 16;
const val2 = 8;

if (val1 === 8) {
  console.log("Il primo valore è uguale a 8");
} else if (val2 === 8) {
  console.log("Il secondo valore è uguale ad 8");
} else if (val1 === 8 && val2 === 8) {
  console.log("Entrambi i valori sono uguali ad 8");
} else {
  console.log("Nessun valore è uguale ad 8");
}

const somma = val1 + val2;
const sottrazione = val1 - val2;
const sottrazione2 = val2 - val1;

if (somma === 8) {
  console.log("La loro somma è uguale a 8");
} else {
  console.log("La loro somma non è uguale ad 8");
}

if (sottrazione === 8) {
  console.log("La loro sottrazione è uguale a 8");
} else if (sottrazione2 === 8) {
  console.log("La loro sottrazione è uguale a 8");
} else {
  console.log("La loro sottrazione non è uguale ad 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totalShoppingCart = 100;
const costoSpedizione = 10;
let totalAmount = 0;

if (totalShoppingCart > 50) {
  console.log(
    "Hai diritto alla spedizione gratuita" +
      ", saldo totale: " +
      totalShoppingCart
  );
} else {
  totalAmount = totalShoppingCart + costoSpedizione;
  console.log("Costo totale della spedizione: " + totalAmount);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalAmount20 = 0;
const sconto = 0.2;

if (totalShoppingCart > 50) {
  totalAmount20 = totalShoppingCart * sconto;
  totalAmount = totalShoppingCart - totalAmount20;
  console.log(
    "Hai diritto alla spedizione gratuita" +
      ", ed è presente anche il 20% di sconto. Saldo totale: " +
      totalAmount
  );
} else {
  totalAmount = totalShoppingCart + costoSpedizione;
  console.log("Costo totale della spedizione: " + totalAmount * sconto);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const valore1 = 20;
const valore2 = 2;
const valore3 = 15;

if (valore1 > valore2 && valore1 > valore3 && valore2 < valore3) {
  console.log(
    "L'ordine dei numeri è questo: " + valore1 + " " + valore3 + " " + valore2
  );
} else {
  console.log("Non sono in ordine");
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (typeof valore1 === "number") {
  console.log(valore1 + " è un numero");
} else {
  console.log(valore1 + " non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (valore1 % 2 === 0) {
  console.log(valore1 + " è un numero pari");
} else {
  console.log(valore1 + " è un numero dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;
if (val < 10 && val > 5) {
  console.log(val + " è minore di 10 ma maggiore di 5");
} else if (val < 5) {
  console.log(val + " è minore di 5");
} else {
  console.log(val + " è uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const array = [];
console.log("Array vuoto: [" + array + "]");
array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);
array.push(6);
array.push(7);
array.push(8);
array.push(9);
array.push(10);
console.log(array);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
array.splice(9, 1, 100);
console.log(array);
