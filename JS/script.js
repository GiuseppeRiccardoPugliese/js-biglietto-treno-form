//Form fix senno' si rompe tutto >.>
const myForm = document.getElementById("my_form");

// Definisco la variabile del bottone "Genera"
let buttonGenera = document.getElementById("genera");

// Definisco la variabile del bottone "Annulla"
let buttonAnnulla = document.getElementById("annulla");

//Form fix senno' si rompe tutto >.>
myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Definisco la mia funzione per prendere i dati inseriti dall'utente per il button
    buttonGenera.addEventListener("click",

        function () {

            //CHIEDO all'utente il suo nome e cognome
            const userNameSurname = document.getElementById("name_surname").value;
            console.log("Nome dell'utente: " + userNameSurname);

            //CHIEDO all'utente il numero di km da percorrere
            const km = parseInt(document.getElementById("km").value);
            console.log("Chilometri da fare: ", km);

            //CHIEDO all'utente la sua eta'
            const userAgeRange = parseInt(document.getElementById("age").value);
            console.log("Eta' dell'utente: ", userAgeRange);

            //Calcolo del prezzo totale del viaggio (0.21 € al km)
            const priceKm = 0.21;
            let defaultPrice = priceKm * km;
            console.log("Prezzo di base: ", defaultPrice);

            //Definisco la mia variabile sullo sconto e del risultato
            let sconto = 0;
            let risultato;

            // Condizione
            if (userAgeRange === 1) { //SE minorenne applico uno sconto del 20%
                sconto = defaultPrice * 0.20;
                console.log("Sconto al 20%: ", sconto);
            } else if (userAgeRange === 3) { //ALTRIMENTI SE over 65 applico uno sconto del 40%
                sconto = defaultPrice * 0.40;
                console.log("Sconto al 40%: ", sconto);
            }

            risultato = (defaultPrice - sconto).toFixed(2);
            console.log("Questo e' il prezzo netto: ", risultato);

            //Output per il tipo di sconto del biglietto
            if (userAgeRange === 1) {
                document.getElementById("type_of_offer").innerHTML = "Sconto minorenni al 20%";
            } else if (userAgeRange === 3) {
                document.getElementById("type_of_offer").innerHTML = "Sconto over 65 al 40%";
            } else {
                document.getElementById("type_of_offer").innerHTML = "Prezzo standard"
            }

            // Stampa del biglietto al "genera"
            // Output del nome
            document.getElementById("nome_cognome").innerHTML = userNameSurname;

            // Output della carrozza
            document.getElementById("carriage").innerHTML = Math.floor((Math.random() * 10) + 1);

            // Output codice CP
            document.getElementById("code_cp").innerHTML = Math.floor((Math.random() * 10000) + 1);

            // Output prezzo finale
            document.getElementById("final_price").innerHTML = risultato + "€";

            // Print out del biglietto sul click del bottone "genera"
            let ticketNascosto = document.getElementById("hidden_ticket");
            ticketNascosto.style.display = "block";
        }
    )
}
);

//Fix per il button "annulla" Ps. ricorda del type="reset" all'interno dell'html che svolge la stessa funzione
buttonAnnulla.addEventListener("click",
    function () {
        history.go(0);
    }
);

