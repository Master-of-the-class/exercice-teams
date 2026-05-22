const champs = [
    "octobre",
    "visiter",
    "abandonne"
];

function sauvegarder() {

    champs.forEach(id => {

        localStorage.setItem(
            id,
            document.getElementById(id).value
        );
    });

    document.getElementById("status").innerText =
        "Sauvegardé automatiquement";
}

function charger() {

    champs.forEach(id => {

        const valeur = localStorage.getItem(id);

        if (valeur) {

            document.getElementById(id).value = valeur;
        }

        document
            .getElementById(id)
            .addEventListener("input", sauvegarder);
    });
}

charger();