//INTIALISATION OF THE VARIABLES
const nomeCognome= document.getElementById("nameSurname");
const chilometri= document.getElementById("Kilometers");
const etaPersona= document.getElementById("agePerson");
const bottone= document.getElementById("button");

const sottotitolo= document.getElementById("subTitle");
const biglietto= document.getElementById("secondCard");

const nomePasseggero= document.getElementById("namePassenger");
const offertaBiglietto= document.getElementById("ticketOffert");
const numeroCarrozza= document.getElementById("numberCoach");
const codiceCp= document.getElementById("codeCp");
const prezzoBiglietto= document.getElementById("priceTicket");

//PART ABOUT THE FUNCTIONS
    sottotitolo.style.display = "none"
    biglietto.style.display = "none" 

bottone.addEventListener("click", function() {
    sottotitolo.style.display= "block"
    biglietto.style.display= "block" 

    let codiceCarozza= RandomNumber (0,10)
    let cpCodiceHtml= RandomNumber (0,10000)

    numeroCarrozza.innerHTML = codiceCarozza
    codiceCp.innerHTML = cpCodiceHtml
     
    nomePasseggero.innerHTML = nomeCognome.value

    if ( etaPersona.value === "minorenne" ){
        offertaBiglietto.innerHTML = "biglietto scontato del 20%"
        
        prezzoBiglietto.innerHTML = (0.21*chilometri.value)-(0.21*chilometri.value*20/100).toFixed(2) + "€"
    } else  if ( etaPersona.value === "maggiorenne" ){
        offertaBiglietto.innerHTML = "biglietto standard"

        prezzoBiglietto.innerHTML = (0.21*chilometri.value).toFixed(2) + "€"
    } else  if ( etaPersona.value === "over" ){
        offertaBiglietto.innerHTML = "biglietto scontato del 40%"

        prezzoBiglietto.innerHTML = (0.21*kilometresDone)-(0.21*kilometresDone*40/100).toFixed(2) + "€"
    }
})

function RandomNumber( min , max ) {
    return Math.floor( Math.random()*(max-min + 1) + 1 )
}

