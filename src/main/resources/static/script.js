//array for å lagre bilettobjekter
let biletter = [];
function bestillBiletter(){
    //henter verdier fra inputfeltene
    let filmer = document.getElementById("fimer").value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("telefonnr").value;
    let epost = document.getElementById("epost").value;

    //statisk boolean for validering
    let gyldig = true;

    //validering av antall
    if(antall.trim() === ""){
        document.getElementById("antallFeil").style.display = "inline";
        gyldig = false;
    } else {
        document.getElementById("antallFeil").style.display = "none";
    }
    //validering av fornavn
    if(fornavn.trim() === ""){
        document.getElementById("fornavnFeil").style.display = "inline";
        gyldig = false;
    } else{
        document.getElementById("fornavnFeil").style.display = "none";
    }
    //validering av etternavn
    if(etternavn.trim() === ""){
        document.getElementById("etternavnFeil").style.display = "inline";
        gyldig = false;
    } else{
        document.getElementById("etternavnFeil").style.display = "none";
    }
    //validering av telefonnr
    if(telefonnr.trim() === ""){
        document.getElementById("telefonnrFeil").style.display = "inline";
        gyldig = false;
    } else{
        document.getElementById("telefonnrFeil").style.display = "none";
    }
    //validering av epost
    if(epost.trim() === ""){
        document.getElementById("epostFeil").style.display = "inline";
        gyldig = false;
    } else{
        document.getElementById("epostFeil").style.display = "none";
    }

    if(!gyldig) return;

    biletter.push({film,antall,fornavn,etternavn,telefonnr,epost});
}