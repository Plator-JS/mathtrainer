document.addEventListener("DOMContentLoaded", () => {
    const aufgabenContainer = document.getElementById("aufgabenContainer");

    function generiereAufgabe(id) {
        let zahl1 = Math.floor(Math.random() * 20) + 1; // Zufallszahl zwischen 1 und 20
        let zahl2 = Math.floor(Math.random() * 20) + 1;
        let richtigeAntwort = zahl1 * zahl2; // Multiplikationsaufgabe

        let aufgabeHTML = `
            <div>
                <h2>Was ergibt ${zahl1} * ${zahl2}?</h2>
                <input id="antwort${id}" type="text">
                <button onclick="prüfeAntwort(${id}, ${richtigeAntwort})">Prüfen</button>
                <p id="ergebnis${id}"></p>
                <button id="reset"(${id})">Reset</button>
            </div>`;
        aufgabenContainer.innerHTML += aufgabeHTML; // Aufgabe in den Container einfügen
    }

    function erstelleAufgaben(anzahl) {
        for (let i = 1; i <= anzahl; i++) {
            generiereAufgabe(i);
        }
    }

    erstelleAufgaben(5); // 5 zufällige Aufgaben erstellen
});

function prüfeAntwort(id, richtigeAntwort) {
    let eingabe = document.getElementById(`antwort${id}`).value;
    let ergebnis = document.getElementById(`ergebnis${id}`);
    
    if (parseInt(eingabe) === richtigeAntwort) {
        ergebnis.textContent = "Richtig!";
        ergebnis.style.color = "green";
    } 
    else {
        ergebnis.textContent = `Falsch! Die richtige Antwort ist ${richtigeAntwort}.`;
        ergebnis.style.color = "red";
    }
}

//Funktoniert nicht!!!
function reset() {
    let eingabeFelder = document.querySelectorAll("input[type='text']");
    let ergebnisFelder = document.querySelectorAll("#ergebnis");

    eingabeFelder.forEach(feld => feld.value = ""); // Eingabefelder leeren
    ergebnisFelder.forEach(feld => feld.textContent = ""); // Ergebnis zurücksetzen
}
