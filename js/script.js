// var stringaUtente = prompt('Inserisci una parola per sapere se è Palidroma');

// function palidroma(parola) {

//     var stringa = parola.split('').reverse().join('');
//     if (stringa === parola) {
//         alert('è palindroma');
//     }else{
//         alert('no');
//     }
//     return stringa;

// }

// alert(palidroma(stringaUtente));

// secondo esercizio pari o dispari: 

var pariDispari = prompt('La somma di due numeri è pari o dispari ?');
var numeroUtente = parseInt(prompt('Inserisci la tua scelta numero da 1 a 5'));

outPut = document.getElementById('result');

var randomUtente = numeroUtente ;  


function randomNumber(min, max){
    var risultato = Math.floor(Math.random() * (max - min + 1) + min);
    return risultato;
}

var randomComputerN = randomNumber(1,5);

outPut.innerHTML = 'Scelta utente: ' + randomUtente + '<br> Scelta computer: ' + randomComputerN;

var sommaNumeri = parseInt(randomUtente) + parseInt(randomComputerN) ;

function separiSeDispari (num) {
    if (parseInt(num) % 2 === 0) {
        var numero = 'La somma dei due è pari!: ' + num; 
    }else{
        numero = 'La somma dei due è dispari! : ' + num;
    }
    return numero; 
}

var scopertaPariDispari = separiSeDispari(sommaNumeri);

outPut.innerHTML += '<br>' + scopertaPariDispari; 

