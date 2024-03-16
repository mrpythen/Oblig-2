// JavaScript code for handling the interactions and making API calls to the server
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("kjøpBillett").addEventListener("click", bestillBilletter);
    document.getElementById("slettAlle").addEventListener("click", slettAlleBilletter);
});

function bestillBilletter(event) {
    event.preventDefault(); // Prevent form submission

    let billett = {
        film: document.getElementById("filmer").value,
        antall: parseInt(document.getElementById("antall").value),
        fornavn: document.getElementById("fornavn").value,
        etternavn: document.getElementById("etternavn").value,
        telefonnr: document.getElementById("telefonnr").value,
        epost: document.getElementById("epost").value
    };

    fetch('/lagre', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(billett)
    }).then(() => {
        alert('Billett lagret');
        hentAlleBilletter(); // Refresh the ticket list
    });
}

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

function slettAlleBilletter() {
    fetch('/slettAlle').then(() => {
        hentAlleBilletter(); // Clear and refresh the ticket list
    });
}
