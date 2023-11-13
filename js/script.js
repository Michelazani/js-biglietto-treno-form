// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.1976 € al km)
// - va applicato uno sconto del 17.65% per i minorenni
// - va applicato uno sconto del 53.27% per gli over 65.


const priceGas = 0.1976 ;

const discountMinor =  17.65 ;

const discountOld = 53.27;

const element = document.getElementById('train-ticket')

const kmElement = document.getElementById ('km')  

const ageElement = document.getElementById ('age')

let kmForPrice = kmElement * priceGas


const buttonElement = document.querySelector ('button');

console.log (element)

buttonElement.addEventListener ('click' , function (){
     
     alert ('la vita rimasta è 88');
     } ) 


    