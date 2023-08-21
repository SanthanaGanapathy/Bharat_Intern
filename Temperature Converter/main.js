const CelsiusInput = document.querySelector('#Celsius > input');
const FahrenheitInput = document.querySelector('#Fahrenheit > input');
const roundToTwoDP = (num) => {
  return num.toFixed(2);
};


const CelsiusToFa = () => {
  const CelsiusTemp = parseFloat(CelsiusInput.value);
  const FahrenheitTemp = (CelsiusTemp * 1.8) + 32;

  FahrenheitInput.value = roundToTwoDP(FahrenheitTemp);
};


const FahrenheitToCe = () => {
  const FahrenheitTemp = parseFloat(FahrenheitInput.value);
  const CelsiusTemp = (FahrenheitTemp - 32) * (5 / 9);

  CelsiusInput.value = roundToTwoDP(CelsiusTemp);
  
};


const main = () => {
  CelsiusInput.addEventListener('input', CelsiusToFa);
  FahrenheitInput.addEventListener('input', FahrenheitToCe);
  
};

main();
