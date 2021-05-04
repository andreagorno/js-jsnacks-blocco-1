// Snack #4:
// Generatore di “nomi cognomi” casuali: scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste.


// funzione per generare nome e cognome casuali
function generate(surname, name) {
    var surname = ["rossi", "neri", "verdi", "gialli", "zang"];

    var randomSurname = surname[Math.floor(Math.random()*surname.length)];

    var name = ["andrea", "chiara", "gianluca", "loredana", "silvia", "camilla", "leo"];

    var randomName = name[Math.floor(Math.random()*name.length)];
    
    return randomSurname + " " + randomName;
}

var result = generate();
// console.log(result);

// creazione lista di 10 nomi
var ul = document.getElementById("paragraph");
for (var i = 0; i < 10; i++) {
    var result = generate();
    console.log((i + 1) + " " + result);

    ul.innerHTML += "<li>" + result + "</li>";
}