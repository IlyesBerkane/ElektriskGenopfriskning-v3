# ElektriskGenopfriskning-v3
1. Beskrivelse af projektets formål og målgruppe: Hvem henvender appen sig til. Hvilken
målgruppe? Hvilken faglig problemstilling forsøger det at løse.


- Vores hjemmeside er skabt med det formål at henvende sig til en bred målgruppe, der inkluderer både enkeltpersoner, der allerede har haft undervisning i generel fysisk elektrisk viden, samt dem, der ønsker at lære om grundlæggende elektrisk fysik. Vi fokuserer især på at oplyse brugerne om Ohms lov, der betragtes som en hjørnesten inden for elektroteknik. Målet er at tilbyde en interaktiv platform, hvor brugere kan genopfriske deres eksisterende viden eller erhverve nye kundskaber om det fundamentale koncept. Ved at integrere en kalkulator funktion og en test sektion giver hjemmesidens brugere mulighed for ikke kun at lære om Ohms lov, men også at praktisk anvende og evaluere deres forståelse af loven.


2. Beskrivelse af den eller de designmønstre I benytter.


- Designmønstret "Module Pattern" er brrugt til at organisere JavaScript-koden ved at opdele alle de funktioner som vi gerne ville bruge i separate moduler. Hvert modul indeholder private variabler og funktioner, hvilket minimerer risikoen for konflikter med andre funktioner og deres del af koden. Dette har gjort det nemmere at vedligeholde og udvide koden, da hver del af funktionaliteten er indkapslet i sit eget selvstændige modul. Samtidig reduceres risikoen for uforvenntede globale variabelkonflikter, hvilket gør koden mere robust og lettere at forstå og bygge vidre på.


3. Beskrivelse af udviklingsprocessen.


- Vi startede udviklingen af hjemmesiden med HTML og CSS for at etablere det grundlæggende layout og design. Efter at have skabt en visuel ramme for hjemmesiden, introducerede vi JavaScript og implementerede gradvist designmønstret "Module Pattern". Dette skridt gav os mulighed for at organisere og strukturere JavaScript-koden ved at opdele funktionaliteten i separate moduler. Vi fokuserede på at indkapsle relevante variabler og funktioner inden for disse moduler, hvilket bidrog til at undgå forvirringer af globale og private variabler og skabe en mere overskuelig og vedligeholdelsesvenlig kodebase. Modulerne blev dedikeret til specifikke opgaver som beregning af strøm, håndtering af tekst og udførelse af testberegninger. Denne gradvise tilgang til udviklingsprocessen muliggjorde en systematisk opbygning af hjemmesiden, hvor funktionalitet blev tilføjet og forfinet trin for trin, mens vi bevarede en struktureret og organiseret kodebase.


4. Beskrivelse af brugergrænsefladen.


- Vores hjemmesides brugergrænseflade er overordnet og velstruktueret, der præsenterer information om elektricitet på en velorganiseret måde. En central titel introducerer formålet, mens separate sektioner, såsom "General Elektrisk Spænding", og kalkulator funktionaliteten. Den anvendte CSS-styling giver en æstetik visuel oplevelse med brug af baggrundsbillede og kontrastiske farver. JavaScript-koden er organiseret ved hjælp af Module Pattern som gør det mere overskueligt at læse og byggee videre på, hvilket hjælper med at opdele funktionaliteten i forskellige moduler som `CalculatorModule`, `ElektriskVidenModule` og `TestModule`. Dette gør koden mere struktureret og lettere at vedligeholde. Interaktiviteten er integreret ved hjælp af event listeners, der håndterer brugerens interaktion med kalkulatoren og test delen. Samlet set skaber dette en brugergrænseflade, der kombinerer information, funktionalitet og æstetik til at levere en engagerende oplevelse for besøgende, der ønsker at genopfriske deres viden eller lære om elektricitet.


5. Et skema med test.


- var TestModule = (function () {
    var testResultElement = document.getElementById('testResult');

    function calculateTest() {
        var inputModstand = parseFloat(document.getElementById('input1').value);

        testResultElement.innerText = '';

        if (isNaN(inputModstand)) {
            testResultElement.innerText = 'Fejl: Indtast en gyldige værdi for modstand.';
        } else {
            if (inputModstand == 300) {
                testResultElement.innerText = 'Korrekt! 9 V/0.03 I = 300 ohm';
            } else {
                testResultElement.innerText = 'Forkert, husk at bruge ohms lov fra overstående tekst!';
            }
        }
    }

    return {
        calculateTest: calculateTest
    };
})();

Denne kalkulator, repræsenteret af `TestModule`, er designet til at evaluere brugerens forståelse af Ohms lov. Når brugeren indtaster en værdi for modstand (`inputModstand`), udfører kalkulatoren en sammenligning. Hvis den indtastede værdi er korrekt, dvs. 300 ohm i dette tilfælde, vises en succesbesked, der bekræfter brugerens korrekte anvendelse af Ohms lov med spænding (9V) og strøm (0.03A). Hvis brugeren indtaster en værdi, der ikke er et gyldigt numerisk værdi, vises der en fejlmeddelelse, og hvis den indtastede værdi ikke matcher det forventede resultat, vises en fejlbesked, der opfordrer brugeren til at henvise til Ohms lov for yderligere forståelse. Kalkulatoren tjener dermed som et værktøj til at teste og styrke brugerens viden om Ohms lov ved at give realtidsfeedback baseret på den indtastede modstand.

