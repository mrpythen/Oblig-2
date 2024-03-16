// Use fetch API for server communication
function bestillBilletter() {
    let billett = {
        film: document.getElementById("filmer").value,
        antall: parseInt(document.getElementById("antall").value),
        fornavn: document.getElementById("fornavn").value,
        etternavn: document.getElementById("etternavn").value,
        telefonnr: document.getElementById("telefonnr").value,
        epost: document.getElementById("epost").value
    };

    // Perform input validation here as before
    // Assuming input validation is successful

    fetch('/lagre', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(billett)
    }).then(() => {
        alert('Billett lagret');
        hentAlleBilletter(); // Fetch and display all tickets
    });
}

function hentAlleBilletter() {
    fetch('/hentAlle')
        .then(response => response.json())
        .then(billetter => {
            visBilletter(billetter); // Update this function to accept billetter as a parameter
        });
}

function slettAlleBilletter() {
    fetch('/slettAlle')
        .then(() => {
            hentAlleBilletter(); // Refresh the ticket list
        });
}
