// Definisco la variabile del bottone "Genera"
const buttonGenera = document.getElementById("genera");

// Definisco la mia funzione per prendere i dati inseriti dall'utente per il button
buttonGenera.addEventListener("click",
    function () {
        //CHIEDO all'utente il numero di km da percorrere
        const km = parseInt(document.getElementById("km").value);
        console.log("Chilometri da fare: ", km);

        //CHIEDO all'utente la sua eta'
        const userEta = parseInt(document.getElementById("age").value);
        console.log("Eta' dell'utente ", userEta);
        //Calcolo del prezzo totale del viaggio (0.21 € al km)
        const priceKm = 0.21;
        let defaultPrice = priceKm * km;
        console.log(defaultPrice);

        //Definisco i valori "minorenne" ed "over65"
        let minorenne = userEta < 18;
        let over65 = userEta > 65;

        //Definisco la mia variabile sullo sconto e del risultato
        let sconto = 0;
        let risultato;

        // Condizione
        if (minorenne) { //SE minorenne applico uno sconto del 20%
            sconto = defaultPrice * 0.20;
            console.log(sconto);
        } else if (over65) { //ALTRIMENTI SE over 65 applico uno sconto del 40%
            sconto = defaultPrice * 0.40;
            console.log(sconto);
        }
        risultato = (defaultPrice - sconto).toFixed(2);
        console.log(risultato);
    }
)




//OUTPUT finale in forma umana (ovvero piu' comprensibile numericamente parlando)
// document.getElementById("final_price").innerHTML = risultato.toFixed(2);
// parseFloat(risultato.toFixed)(2);