// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari (verifichiamolo con una funzione) inseriscilo nell’array.
// Stampa l'array nella console.

// creare array vuoto
var arr = [];

// verificare e inserire nell'array
for (var i = 0; i < 6; i++) {
    var number = parseInt(prompt("Inserisci un numero a tua scelta"));
    console.log(number);

    if (control(number)) {
        arr.push(number)
    }
}
console.log(arr);

// FUNZIONI
function control(number) {
    var verify = number % 2 == 0;

    return verify
}