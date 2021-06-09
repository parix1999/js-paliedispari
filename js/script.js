// Primo programma:
function palidroma (word){
    for (var i = 0; i < word.lenght; i++) {
        if (word.slice(i) === word.lenght[i] ) {
            var risultato = 'si è palidroma' + word;
        }else{
            risultato = 'no'
        }
    }
    return risultato; 
}
var outPut = document.getElementById('result');

var parolaUtente = prompt('Inserisci una parola');

var result = palidroma(parolaUtente);
outPut.innerHTML = result;

