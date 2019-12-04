const celciusInput = document.querySelector('#celsius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundNumber(num) {
    return num.toFixed(2);
}

function  celsiusToFahrenheitAndKelvin() {
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = cTemp * 1.8 + 32;
    const kTemp = cTemp + 273.15;
    fahrenheitInput.value = roundNumber(fTemp);
    kelvinInput.value = roundNumber(kTemp);
}

function  fahrenheitToCelsiusAndKelvin() {
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp - 32) / 1.8;
    const kTemp = (fTemp + 459.67) * (5/9);
    celciusInput.value = roundNumber(cTemp);
    kelvinInput.value = roundNumber(kTemp);
}

function  kelvinToClesiusAndFahreheit() {
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp = (kTemp * 9/5) - 459.67;
    celciusInput.value = roundNumber(cTemp);
    fahrenheitInput.value = roundNumber(fTemp);
}

celciusInput.addEventListener('input', celsiusToFahrenheitAndKelvin);
fahrenheitInput.addEventListener('input', fahrenheitToCelsiusAndKelvin);
kelvinInput.addEventListener('input', kelvinToClesiusAndFahreheit);