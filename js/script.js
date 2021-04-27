// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

var km = prompt('Quanti km vuole percorrere?');
var eta = prompt('quanti anni ha?');

var costoTratta = (km * 0.21).toFixed(2);

var prezzo;
if (eta < 18) {
    prezzo = (costoTratta - ((costoTratta * 20) / 100)).toFixed(2);
    document.getElementById('eta').innerHTML = eta;
    document.getElementById('prezzo').innerHTML = 'Prezzo Biglietto Under18  =  €' + prezzo;
} else if (eta > 65) {
    prezzo = (costoTratta - ((costoTratta * 40) / 100)).toFixed(2);
    document.getElementById('eta').innerHTML = eta;
    document.getElementById('prezzo').innerHTML = 'Prezzo Biglietto Over65  =  €' + prezzo;
} else {
    prezzo = costoTratta;
    document.getElementById('eta').innerHTML = eta;
    document.getElementById('prezzo').innerHTML = 'Prezzo Biglietto  =  €' + prezzo;
}

console.log(costoTratta);
console.log(prezzo);