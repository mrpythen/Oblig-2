// Array for å lagre billettobjekter
let billetter = [];

// Event listener for å sjekke om brukeren har trykket på knappene
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("kjøpBillett").addEventListener("click", bestillBilletter);
    document.getElementById("slettAlle").addEventListener("click", slettAlleBilletter);
});

function bestillBilletter(event) {
    event.preventDefault(); // Forhindrer standard innsendingsoppførsel

    // Henter verdier fra inputfeltene
    let filmer = document.getElementById("filmer").value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("telefonnr").value;
    let epost = document.getElementById("epost").value;

    // Validerer hvert felt
    let gyldigFilm = validerFelt(filmer, "filmFeil", "Du må velge film");
    let gyldigAntall = validerFelt(antall, "antallFeil", "Du må skrive noe inn i antall");
    let gyldigFornavn = validerFelt(fornavn, "fornavnFeil", "Du må skrive noe i fornavn");
    let gyldigEtternavn = validerFelt(etternavn, "etternavnFeil", "Du må skrive noe i etternavn");
    let gyldigTelefonnr = validerTelefonnr(telefonnr, "telefonnrFeil", "Telefonnummeret er ikke gyldig");
    let gyldigEpost = validerEpost(epost, "epostFeil", "Epostadressen er ikke gyldig");

    // Sjekker om alle valideringer er passert
    if (!(gyldigFilm && gyldigAntall && gyldigFornavn && gyldigEtternavn && gyldigTelefonnr && gyldigEpost)) {
        return;
    }

    // Legger til billettene i "alle billetter" hvis alle valideringer er passert
    billetter.push({filmer, antall, fornavn, etternavn, telefonnr, epost});

    // Oppdaterer visningen av billetter
    visBilletter();

    // Tømmer inputfeltene for ny innsending
    tømSkjema();
}

function validerFelt(verdi, feilId, feilmelding) {
    if (!verdi.trim()) {
        document.getElementById(feilId).style.display = "inline";
        document.getElementById(feilId).innerHTML = feilmelding;
        return false;
    } else {
        document.getElementById(feilId).style.display = "none";
        return true;
    }
}

function validerTelefonnr(telefonnr, feilId, feilmelding) {
    const telefonKrav = /^\d{8}$/;
    if (!telefonKrav.test(telefonnr)) {
        document.getElementById(feilId).style.display = "inline";
        document.getElementById(feilId).innerHTML = feilmelding;
        return false;
    } else {
        document.getElementById(feilId).style.display = "none";
        return true;
    }
}

function validerEpost(epost, feilId, feilmelding) {
    const epostKrav = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!epostKrav.test(epost)) {
        document.getElementById(feilId).style.display = "inline";
        document.getElementById(feilId).innerHTML = feilmelding;
        return false;
    } else {
        document.getElementById(feilId).style.display = "none";
        return true;
    }
}

function visBilletter() {
    let ut = "<table><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr>";
    billetter.forEach(billett => {
        ut += `<tr><td>${billett.filmer}</td><td>${billett.antall}</td><td>${billett.fornavn}</td><td>${billett.etternavn}</td><td>${billett.telefonnr}</td><td>${billett.epost}</td></tr>`;
    });
    ut += "</table>";
    document.getElementById("filmListe").innerHTML = ut;
}

function tømSkjema() {
    document.getElementById("filmer").value = '';
    document.getElementById("antall").value = '';
    document.getElementById("fornavn").value = '';
    document.getElementById("etternavn").value = '';
    document.getElementById("telefonnr").value = '';
    document.getElementById("epost").value = '';
    // Skjuler eventuelle feilmeldinger
    let feilmeldinger = document.querySelectorAll("span");
    feilmeldinger.forEach(feilmelding => {
        feilmelding.style.display = "none";
    });
}

function slettAlleBilletter() {
    billetter = [];
    visBilletter();
}
