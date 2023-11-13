// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.1976 € al km)
// - va applicato uno sconto del 17.65% per i minorenni
// - va applicato uno sconto del 53.27% per gli over 65.



const buttonElement = document.querySelector('button');

buttonElement.addEventListener ('click' , function (){
    const km = document.getElementById('km-number').value;
    const age = document.getElementById('age-passenger').value;

    const priceGas = 0.1976 ;
    let kmForPrice = (km * priceGas);
 
    const ageMinor = age < 18;
    const discountMinor =  17.65 ;
    const ageOld = age > 65;
    const discountOld = 53.27;

    if (ageMinor === true ) {
        kmForPrice = kmForPrice - ( kmForPrice * discountMinor / 100);
    }
    else if (ageOld === true){
        kmForPrice = kmForPrice - ( kmForPrice * discountOld / 100);
    }
    console.log(kmForPrice)

    document.getElementById ('train-ticket') .innerHTML += 'the price is:' + kmForPrice.toFixed(2) + 'euro'; 
} ) 


    