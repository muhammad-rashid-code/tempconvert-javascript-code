let KValue = 273.15;
function celsiusTofahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
function celsiusToKelvin(celsius) {
  return celsius + KValue;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
function fahrenheitToKelvin(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9 + KValue;
}

function kelvinToCelsius(kelvin) {
  return kelvin - KValue;
}
function kelvinToFahrenheit(kelvin) {
  return ((kelvin - KValue) * 9) / 5 + 32;
}

function temperatureConverter() {
  let value = parseFloat(document.querySelectorAll(`input`)[0].value);
  let from = document.querySelectorAll(`select`)[0].value;
  let to = document.querySelectorAll(`select`)[1].value;
  let fResult;
  if (from === "celsius") {
    if (to === "fahrenheit") {
      fResult = celsiusTofahrenheit(value);
    } else if (to === "kelvin") {
      fResult = celsiusToKelvin(value);
    }
  } else if (from === "fahrenheit") {
    if (to === "celsius") {
      fResult = fahrenheitToCelsius(value);
    } else if (to === "kelvin") {
      fResult = fahrenheitToKelvin(value);
    }
  } else if (from === "kelvin") {
    if (to === "celsius") {
      fResult = kelvinToCelsius(value);
    } else if (to === "fahrenheit") {
      fResult = kelvinToFahrenheit(value);
    }
  }
  document.querySelectorAll(`div`)[4].innerHTML = fResult;
}
