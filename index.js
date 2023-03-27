function convert() {
    // Get input values
    const fromValue = parseFloat(document.getElementById("from").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
  
    // Convert to meters
    let meters = 0;
    switch (fromUnit) {
      case "m":
        meters = fromValue;
        break;
      case "km":
        meters = fromValue * 1000;
        break;
      case "mi":
        meters = fromValue * 1609.34;
        break;
      case "yd":
        meters = fromValue * 0.9144;
        break;
      case "ft":
        meters = fromValue * 0.3048;
        break;
      case "in":
        meters = fromValue * 0.0254;
        break;
    }
  
    // Convert from meters to target unit
    let result = 0;
    switch (toUnit) {
      case "m":
        result = meters;
        break;
      case "km":
        result = meters / 1000;
        break;
      case "mi":
        result = meters / 1609.34;
        break;
      case "yd":
        result = meters / 0.9144;
        break;
      case "ft":
        result = meters / 0.3048;
        break;
      case "in":
        result = meters / 0.0254;
        break;
    }
  
    // Update output
    document.getElementById("to").value = result.toFixed(2);
  }
  
  function reset() {
    document.getElementById("from").value = "";
    document.getElementById("to").value = "";
  }
  