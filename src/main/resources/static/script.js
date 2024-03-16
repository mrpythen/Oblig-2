// JavaScript-kode for å håndtere interaksjoner og gjøre API-kall til serveren
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("kjøpBillett").addEventListener("click", bestillBilletter);
    document.getElementById("slettAlle").addEventListener("click", slettAlleBilletter);
});

// Funksjon for å bestille billetter
function bestillBilletter(event) {
    event.preventDefault(); // Forhindrer standard innsendingsatferd for skjemaet

    let billett = {
        film: document.getElementById("filmer").value,
        antall: parseInt(document.getElementById("antall").value, 10),
        fornavn: document.getElementById("fornavn").value,
        etternavn: document.getElementById("etternavn").value,
        telefonnr: document.getElementById("telefonnr").value,
        epost: document.getElementById("epost").value
    };

    // Sjekker inputvalidering før data sendes
    if (!inputValidering(billett)) {
        alert('Vennligst fyll ut alle feltene korrekt.');
        return;
    }

    // Bruker jQuery's $.post for å sende data til serveren
    $.post('/lagre', billett, () => {
        alert('Billett lagret');
        hentAlleBilletter(); // Oppdaterer listen over billetter
    }).fail(() => {
        alert('Kunne ikke lagre billetten');
    });
}

// Funksjon for å hente alle billetter
function hentAlleBilletter() {
    fetch('/hentAlle').then(response => response.json()).then(billetter => {
        let ut = "<table class='table'><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr>";
        billetter.forEach(billett => {
            ut += `<tr><td>${billett.film}</td><td>${billett.antall}</td><td>${billett.fornavn}</td><td>${billett.etternavn}</td><td>${billett.telefonnr}</td><td>${billett.epost}</td></tr>`;
        });
        ut += "</table>";
        document.getElementById("filmListe").innerHTML = ut;
    });
}

// Funksjon for å slette alle billetter
function slettAlleBilletter() {
    fetch('/slettAlle').then(() => {
        hentAlleBilletter(); // Tømmer og oppdaterer listen over billetter
    });
}

// Funksjon for å validere inndata før de sendes til serveren
function inputValidering(billett) {
    return billett.film && billett.antall > 0 && billett.fornavn && billett.etternavn && billett.telefonnr && billett.epost;
}