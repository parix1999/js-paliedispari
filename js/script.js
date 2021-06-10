
function ispalindroma (word) {
    var reverseword = '';
    
    for (var i = word.lenght - 1; i >=0; i--) {
        reverseword += word[i];
    }
    console.log(reverseword);

    if (word === reverseword) {
        return true;
    }else{
        return false;
    }
}
var stringaUtente = prompt('Inserisci la parola da vedere se è palindroma');

var palindromaOutPut = document.getElementsByClassName('element')[0];

if (ispalindroma(stringaUtente) === true) {
    palindromaOutPut.innerHTML = 'Si è palindroma';
}else{
    palindromaOutPut.innerHTML = 'No non lo è';
}





// secondo esercizio pari o dispari: 

function randomNumber(min, max){
    var risultato = Math.floor(Math.random() * (max - min + 1) + min);
    return risultato;
}
function separiSeDispari (num) {
    if (parseInt(num) % 2 === 0) {
        return true;
    }else{
        return false;
    }
  
}

var pariDispari = prompt('La somma di due numeri è pari o dispari ?');
while (pariDispari !== 'pari' && pariDispari !== 'dispari') {
    alert('Attenzione devi inserire o pari o dispari');
    pariDispari = prompt('La somma di due numeri è pari o dispari?');
}
var numeroUtente = parseInt(prompt('Inserisci la tua scelta numero da 1 a 5'));
while (isNaN(numeroUtente) || numeroUtente > 5 || numeroUtente < 1) {
    alert('Attenzione devi inserire un numero da 1 a 5');
    numeroUtente = prompt('Inserisci un numero da 1 a 5');
}

outPut = document.getElementById('result');

var randomUtente = numeroUtente ;  
var randomComputerN = randomNumber(1,5);
outPut.innerHTML = 'Scelta utente: ' + randomUtente + '<br> Scelta computer: ' + randomComputerN;

var sommaNumeri = parseInt(randomUtente) + parseInt(randomComputerN) ;
var scopertaPariDispari = separiSeDispari(sommaNumeri);

var pari = 'pari';

if ((separiSeDispari(sommaNumeri) === true && pariDispari === 'pari')|| (separiSeDispari(sommaNumeri)=== false && pariDispari === 'dispari')) {
    outPut.innerHTML += '<br> hai vinto'; 
}else{
    outPut.innerHTML += '<br> hai perso ha vinto il computer';
}

 