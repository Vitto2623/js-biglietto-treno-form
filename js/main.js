// Aggiungo una funzionalità al bottone
const bottoneGenera = document.getElementById('genera');
bottoneGenera.addEventListener('click', function(){
    // Lunghezza del tragitto
    const lunghezzaTratta = document.getElementById('km-lenght').value;
    document.getElementById('km-lenght').innerHTML;
    const prezzoParziale = lunghezzaTratta * 0.27;
    let prezzoTotale;
    // età passeggero
    const etàUtente = document.getElementById('età-utente').value;
    document.getElementById('età-utente').innerHTML;
    // calcolo sconto
    if (etàUtente == "Minorenne"){
        prezzoTotale = prezzoParziale - prezzoParziale * 0.17;
    } else if (etàUtente == "Over-65"){
            prezzoTotale = prezzoParziale - prezzoParziale * 0.33;
    } else {
            prezzoTotale = prezzoParziale;
    }

    document.getElementById('output-prezzo-finale').innerHTML = `${prezzoTotale.toFixed(2)} &euro;`;
    document.getElementById('add-name').innerHTML = document.getElementById('name').value;
}
);
// Bottone che annulla i dati inseriti
function formReset(){
	document.getElementById("frm1").reset();
}