// Module Pattern for Calculation
var CalculatorModule = (function () {
    var errorElement = document.getElementById('error');
    var resultElement = document.getElementById('result');

    function calculateCurrent() {
        var resistance = parseFloat(document.getElementById('inputResistance').value);
        var voltage = parseFloat(document.getElementById('inputVoltage').value);

        errorElement.innerText = '';
        resultElement.innerText = '';

        if (isNaN(resistance) || isNaN(voltage)) {
            errorElement.innerText = 'Fejl: Indtast gyldige værdier for modstand og spænding.';
        } else {
            var current = voltage / resistance;
            resultElement.innerText = 'Strøm: ' + current.toFixed(2) + ' ampere';
        }
    }

    return {
        calculateCurrent: calculateCurrent
    };
})();

// Module Pattern for Text Content
var ElektriskVidenModule = (function () {
    var textContentElement = document.getElementById('text-content');

    function setTextContent(text) {
        textContentElement.textContent = text;
    }

    function init() {
        setTextContent('velkommen til Elektrisk Viden!');
    }

    return {
        init: init,
        updateTextContent: setTextContent
    };
})();

ElektriskVidenModule.init();

fetch('tekster/Elektrisk spænding.txt')
    .then(response => {
        if (!response.ok) {
            throw new Error(`404 Network response was not ok: ${response.statusText}`);
        }
        return response.text();
    })
    .then(data => {
        ElektriskVidenModule.updateTextContent(data);
    })
    .catch(error => {
        console.error('Text cannot be fetched', error);
    });

// Module Pattern for Test Calculation
var TestModule = (function () {
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

// Event listener
document.getElementById('calculateButton').addEventListener('click', CalculatorModule.calculateCurrent);

// Event listener
document.getElementById('calculateTest').addEventListener('click', TestModule.calculateTest);
