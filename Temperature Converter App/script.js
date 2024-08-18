document.addEventListener("DOMContentLoaded", function () {
  const temperatureInput = document.getElementById("temperatureInput");
  const inputUnit = document.getElementById("inputUnit");
  const outputUnit = document.getElementById("outputUnit");
  const convertBtn = document.getElementById("convertBtn");
  const resultDisplay = document.getElementById("result");
  const historyList = document.getElementById("historyList");

  // Retrieve and parse conversion history from localStorage
  const conversionHistory =
    JSON.parse(localStorage.getItem("conversionHistory")) || [];

  function updateHistory() {
    historyList.innerHTML = "";
    conversionHistory.forEach((entry) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${entry.inputValue} ${entry.inputUnit} = ${entry.outputValue} ${entry.outputUnit}`;
      historyList.appendChild(listItem);
    });
  }

  function convertTemperature(value, fromUnit, toUnit) {
    let celsiusValue;

    // Convert from input unit to Celsius
    if (fromUnit === "Celsius") {
      celsiusValue = value;
    } else if (fromUnit === "Fahrenheit") {
      celsiusValue = ((value - 32) * 5) / 9;
    } else if (fromUnit === "Kelvin") {
      celsiusValue = value - 273.15;
    } else {
      throw new Error("Invalid input unit");
    }

    // Convert from Celsius to target unit
    let result;
    if (toUnit === "Celsius") {
      result = celsiusValue;
    } else if (toUnit === "Fahrenheit") {
      result = (celsiusValue * 9) / 5 + 32;
    } else if (toUnit === "Kelvin") {
      result = celsiusValue + 273.15;
    } else {
      throw new Error("Invalid output unit");
    }

    return result;
  }

  function handleConversion() {
    const inputValue = parseFloat(temperatureInput.value);
    const inputUnitValue = inputUnit.value;
    const outputUnitValue = outputUnit.value;

    if (isNaN(inputValue)) {
      resultDisplay.textContent = "Please enter a valid number.";
      return;
    }

    try {
      const convertedValue = convertTemperature(
        inputValue,
        inputUnitValue,
        outputUnitValue
      );
      resultDisplay.textContent = `Result: ${convertedValue.toFixed(
        2
      )} ${outputUnitValue}`;

      // Update conversion history
      const historyEntry = {
        inputValue: inputValue.toFixed(2),
        inputUnit: inputUnitValue,
        outputValue: convertedValue.toFixed(2),
        outputUnit: outputUnitValue,
      };
      conversionHistory.push(historyEntry);
      localStorage.setItem(
        "conversionHistory",
        JSON.stringify(conversionHistory)
      );
      updateHistory();
    } catch (error) {
      resultDisplay.textContent = error.message;
    }
  }

  convertBtn.addEventListener("click", handleConversion);

  // Initialize history on page load
  updateHistory();
});
