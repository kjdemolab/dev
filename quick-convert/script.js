function convertTemperature() {
    const value = parseFloat(document.getElementById("value").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const resultElement = document.getElementById("result");
    let result;

    if (isNaN(value)) {
        resultElement.textContent = "Please enter a valid number.";
        return;
    }

    if (fromUnit === toUnit) {
        resultElement.textContent = value.toFixed(2) + " " + getUnitSymbol(toUnit);
        return;
    }

    switch (fromUnit) {
        case "celsius":
            if (toUnit === "fahrenheit") {
                result = (value * 9/5) + 32;
            } else if (toUnit === "kelvin") {
                result = value + 273.15;
            }
            break;
        case "fahrenheit":
            if (toUnit === "celsius") {
                result = (value - 32) * 5/9;
            } else if (toUnit === "kelvin") {
                result = (value - 32) * 5/9 + 273.15;
            }
            break;
        case "kelvin":
            if (toUnit === "celsius") {
                result = value - 273.15;
            } else if (toUnit === "fahrenheit") {
                result = (value - 273.15) * 9/5 + 32;
            }
            break;
    }

    resultElement.textContent = result.toFixed(2) + " " + getUnitSymbol(toUnit);
}

function getUnitSymbol(unit) {
    switch (unit) {
        case "celsius":
            return "°C";
        case "fahrenheit":
            return "°F";
        case "kelvin":
            return "K";
        default:
            return "";
    }
}