var stringaUtente = prompt('Inserisci una parola per sapere se è Palidroma');

function palidroma(parola) {
    // var lunghezzaParola = parola.lenght;
    // var stringa = "";
    // for (var i = (lunghezzaParola - 1); i >= 0; i--) {
    //     stringa += parola[i];
    // }
    // return stringa;
    var stringa = parola.split('').reverse().join('');
    if (stringa === parola) {
        alert('è palindroma');
    }else{
        alert('no');
    }
    return stringa;

}

alert(palidroma(stringaUtente));

