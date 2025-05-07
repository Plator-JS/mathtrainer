document.addEventListener("DOMContentLoaded", () => {
    const aufgabenContainer = document.getElementById("aufgabenContainer");

    function generiereAufgabe(id) {
        let zahl1 = Math.floor(Math.random() * 20) + 1; 
        let zahl2 = Math.floor(Math.random() * 20) + 1;
        let richtigeAntwort = zahl1 * zahl2;

        let aufgabeHTML = `
            <div>
                <h2>Was ergibt ${zahl1} * ${zahl2}?</h2>
                <input id="antwort${id}" type="text">
                <button onclick="prüfeAntwort(${id}, ${richtigeAntwort})">Prüfen</button>
                <p id="ergebnis${id}"></p>
            </div>`;
        aufgabenContainer.innerHTML += aufgabeHTML; 
    }

    function erstelleAufgaben(anzahl) {
        for (let i = 1; i <= anzahl; i++) {
            generiereAufgabe(i);
        }
    }

    erstelleAufgaben(5);
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
