// Definisco la variabile del bottone "Genera"
const buttonGenera = document.getElementById("genera");

// Definisco la mia funzione per prendere i dati inseriti dall'utente per il button
buttonGenera.addEventListener("click",

    function () {


        //CHIEDO all'utente il numero di km da percorrere
        const km = parseInt(document.getElementById("km").value);
        console.log("Chilometri da fare: ", km);

        //CHIEDO all'utente la sua eta'
        const userAgeRange = parseInt(document.getElementById("age").value);
        console.log("Eta' dell'utente ", userAgeRange);

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

    }
)
