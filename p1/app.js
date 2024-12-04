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

function temperatureConverter(value, from, to) {
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
  return fResult;
}
document
  .querySelectorAll(`form`)[0]
  .addEventListener(`submit`, function (event) {
    event.preventDefault();

    let inputValue = parseFloat(document.querySelectorAll(`input`)[0].value);
    let fromValue = document.querySelectorAll(`select`)[0].value;
    let toValue = document.querySelectorAll(`select`)[1].value;
    let result = temperatureConverter(inputValue, fromValue, toValue);
    document.querySelectorAll(`div`)[4].innerHTML += `${inputValue} °${
      fromValue.slice(0, 1).toUpperCase() + fromValue.slice(1)
    } is equal to ${result} °${
      toValue.slice(0, 1).toUpperCase() + toValue.slice(1)
    } <br/>`;
  });
