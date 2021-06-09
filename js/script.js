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

function randomNumber(min, max){
    var risultato = Math.floor(Math.random() * (max - min + 1) + min);
    return risultato;
}
function separiSeDispari (num) {
    if (parseInt(num) % 2 === 0) {
        var numero = 'la somma dei due numeri è pari!: ' + num; 
    }else{
        numero = 'la somma dei due numeri è dispari! : ' + num;
    }
    return numero; 
}

var pariDispari = prompt('La somma di due numeri è pari o dispari ?');
var numeroUtente = parseInt(prompt('Inserisci la tua scelta numero da 1 a 5'));
outPut = document.getElementById('result');

var randomUtente = numeroUtente ;  
var randomComputerN = randomNumber(1,5);
outPut.innerHTML = 'Scelta utente: ' + randomUtente + '<br> Scelta computer: ' + randomComputerN;

var sommaNumeri = parseInt(randomUtente) + parseInt(randomComputerN) ;
var scopertaPariDispari = separiSeDispari(sommaNumeri);

var pari = 'pari';

if (pariDispari === pari && scopertaPariDispari % 2 === 0) {
    var check = 'hai vinto ' + scopertaPariDispari;
}else{
    check = 'no ha vinto il computer ' + scopertaPariDispari;
}

outPut.innerHTML += '<br>' + check; 