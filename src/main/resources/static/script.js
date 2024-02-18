//array for å lagre billettobjekter
let billetter = [];

//event listner for å sjekke om bruker har trykket på knappene
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("kjøpBillett").addEventListener("click", bestillBilletter);
    document.getElementById("slettAlle").addEventListener("click", slettAlleBilletter);
});
    function bestillBilletter() {
        //henter verdier fra inputfeltene
        let filmer = document.getElementById("filmer").value;
        let antall = document.getElementById("antall").value;
        let fornavn = document.getElementById("fornavn").value;
        let etternavn = document.getElementById("etternavn").value;
        let telefonnr = document.getElementById("telefonnr").value;
        let epost = document.getElementById("epost").value;

        //statisk boolean for validering
        let gyldig = true;

        //validering av antall
        if (antall.trim() === "") {
            document.getElementById("antallFeil").style.display = "inline";
            gyldig = false;
        } else {
            document.getElementById("antallFeil").style.display = "none";
        }
        //validering av fornavn
        if (fornavn.trim() === "") {
            document.getElementById("fornavnFeil").style.display = "inline";
            gyldig = false;
        } else {
            document.getElementById("fornavnFeil").style.display = "none";
        }
        //validering av etternavn
        if (etternavn.trim() === "") {
            document.getElementById("etternavnFeil").style.display = "inline";
            gyldig = false;
        } else {
            document.getElementById("etternavnFeil").style.display = "none";
        }
        //validering av telefonnr
        if (telefonnr.trim() === "") {
            document.getElementById("telefonnrFeil").style.display = "inline";
            gyldig = false;
        } else {
            document.getElementById("telefonnrFeil").style.display = "none";
        }
        //validering av epost
        if (epost.trim() === "") {
            document.getElementById("epostFeil").style.display = "inline";
            gyldig = false;
        } else {
            document.getElementById("epostFeil").style.display = "none";
        }

        if (!gyldig) return;
        //legger til bilettene i "alle biletter"
        billetter.push({filmer, antall, fornavn, etternavn, telefonnr, epost});

        // Tømmer inputfeltene
        document.getElementById("filmer").value = '';
        document.getElementById("antall").value = '';
        document.getElementById("fornavn").value = '';
        document.getElementById("etternavn").value = '';
        document.getElementById("telefonnr").value = '';
        document.getElementById("epost").value = '';

        visBilletter(); // Oppdaterer visningen av billetter
    }

function visBilletter() {
    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
        "</tr>";
    for (let billett of billetter) {
        ut += "<tr>";
        ut += "<td>" + billett.filmer + "</td><td>" + billett.antall + "</td><td>" + billett.fornavn + "</td><td>" + billett.etternavn + "</td><td>" + billett.telefonnr + "</td><td>" + billett.epost + "</td>";
        ut += "</tr>";
    }
    ut += "</table>";
    document.getElementById("filmListe").innerHTML = ut;
}


    function slettAlleBilletter() {
        billetter = [];
        visBilletter();
    }
