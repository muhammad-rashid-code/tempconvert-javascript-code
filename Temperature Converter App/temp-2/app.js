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

function convertTemperature(value, fromScale, toScale) {
  let result;

  if (fromScale === "c") {
    if (toScale === "f") {
      result = celsiusToFahrenheit(value);
    } else if (toScale === "k") {
      result = celsiusToKelvin(value);
    }
  } else if (fromScale === "f") {
    if (toScale === "c") {
      result = fahrenheitToCelsius(value);
    } else if (toScale === "k") {
      result = fahrenheitToKelvin(value);
    }
  } else if (fromScale === "k") {
    if (toScale === "c") {
      result = kelvinToCelsius(value);
    } else if (toScale === "f") {
      result = kelvinToFahrenheit(value);
    }
  }

  return result;
}

document
  .querySelector("#coverterform")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let temperature = parseFloat(document.querySelector("#input-group").value);
    let fromScale = document.querySelector("#from-unit").value;
    let toScale = document.querySelector("#toUnit").value;

    let result = convertTemperature(temperature, fromScale, toScale);

    document.querySelectorAll(
      "div"
    )[4].innerHTML = `${temperature} ${fromScale} is equal to ${result.toFixed(
      2
    )} ${toScale}`;
  });
console.log(document.querySelectorAll("div"));
