// console.log('hello!')

// > Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// > Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: 

    // il prezzo del biglietto è definito in base ai km (0.276 € al km)
    // va applicato uno sconto del 21% per i minorenni
    // va applicato uno sconto del 42% per gli over 65.
    // L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo) [questo richiederà un minimo di ricerca]


// Chiedo i chilometri che deve percorrere

const userKm = parseInt(prompt("Quanti km devi percorrere?"));

// Chiedo l'età del passeggero

const userAge = parseInt(prompt("età passeggero"));

// Calcolo il prezzo del viaggio totale (0.276 cent /km)senza sconti

const price = 0.276;

let finalPrice;

finalPrice = userKm * price;
console.log(finalPrice);

//Calcolo variabili sconto

const sales21 = (finalPrice * 21) / 100;
const sales42 = (finalPrice * 42) / 100;

// Calcolo i prezzi utilizzando le varie variabili

if (userAge < 18) {
    finalPrice = finalPrice - sales21;
    document.getElementById('price').innerHTML = ('€ ') + finalPrice.toFixed(2);
} else if (userAge > 65) {
    finalPrice = finalPrice - sales42;
    document.getElementById('price').innerHTML = ('€ ') + finalPrice.toFixed(2);
} else {
    document.getElementById('price').innerHTML = ('€ ') + finalPrice.toFixed(2);
}