// Temperature conversion functions
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function fahrenheitToKelvin(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9 + 273.15;
}

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
  return ((kelvin - 273.15) * 9) / 5 + 32;
}

// Conversion function
function convertTemperature(value, fromScale, toScale) {
  let result;

  if (fromScale === "C") {
    if (toScale === "F") {
      result = celsiusToFahrenheit(value);
    } else if (toScale === "K") {
      result = celsiusToKelvin(value);
    }
  } else if (fromScale === "F") {
    if (toScale === "C") {
      result = fahrenheitToCelsius(value);
    } else if (toScale === "K") {
      result = fahrenheitToKelvin(value);
    }
  } else if (fromScale === "K") {
    if (toScale === "C") {
      result = kelvinToCelsius(value);
    } else if (toScale === "F") {
      result = kelvinToFahrenheit(value);
    }
  } else {
    return "Invalid scale";
  }

  return result;
}

// Handle form submission
document
  .getElementById("converter-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let temperature = parseFloat(document.getElementById("temperature").value);
    let fromScale = document.getElementById("from-scale").value;
    let toScale = document.getElementById("to-scale").value;

    let result = convertTemperature(temperature, fromScale, toScale);

    document.getElementById(
      "result"
    ).textContent = `${temperature} ${fromScale} is equal to ${result.toFixed(
      2
    )} ${toScale}`;
  });
