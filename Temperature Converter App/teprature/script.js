const temperatureInput = document.getElementById("temperatureInput");
const inputUnit = document.getElementById("inputUnit");
const outputUnit = document.getElementById("outputUnit");
const convertBtn = document.getElementById("convertBtn");
const resultDisplay = document.getElementById("result");
const historyList = document.getElementById("historyList");

const conversionHistory = [];

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

  if (fromUnit === "Celsius") {
    celsiusValue = value;
  } else if (fromUnit === "Fahrenheit") {
    celsiusValue = ((value - 32) * 5) / 9;
  } else if (fromUnit === "Kelvin") {
    celsiusValue = value - 273.15;
  }

  let result;
  if (toUnit === "Celsius") {
    result = celsiusValue;
  } else if (toUnit === "Fahrenheit") {
    result = (celsiusValue * 9) / 5 + 32;
  } else if (toUnit === "Kelvin") {
    result = celsiusValue + 273.15;
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

  const convertedValue = convertTemperature(
    inputValue,
    inputUnitValue,
    outputUnitValue
  );
  resultDisplay.textContent = `Result: ${convertedValue.toFixed(
    2
  )} ${outputUnitValue}`;

  const historyEntry = {
    inputValue: inputValue.toFixed(2),
    inputUnit: inputUnitValue,
    outputValue: convertedValue.toFixed(6),
    outputUnit: outputUnitValue,
  };
  conversionHistory.push(historyEntry);
  localStorage.setItem("conversionHistory", JSON.stringify(conversionHistory));
  updateHistory();
}

convertBtn.addEventListener("click", handleConversion);

updateHistory();
