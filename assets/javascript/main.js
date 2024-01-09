//INTIALISATION OF THE VARIABLES
const nomeCognome= document.getElementById(nameSurname);
const chilometri= document.getElementById(Kilometers);
const etaPersona= document.getElementById(agePerson);
const bottone= document.getElementById(button);

const sottotitolo= document.getElementById(subTitle);
const biglietto= document.getElementById(secondCard);

const nomePasseggero= document.getElementById(namePassenger);
const offertaBiglietto= document.getElementById(ticketOffert);
const numeroCarrozza= document.getElementById(numberCoach);
const codiceCp= document.getElementById(codeCp);
const prezzoBiglietto= document.getElementById(priceTicket);

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

    if (etaPersona=== "minorenne")
})

function RandomNumber( min , max ) {
    return Math.floor( Math.random()*(max-min + 1) + 1 )
}

