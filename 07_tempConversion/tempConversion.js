const convertToCelsius = function(fahr) {
  let fahrenheit = 0;
  fahrenheit = (fahr - 32) * (5/9);
  //checks if this is a whole number
  if (fahrenheit === Math.floor(fahrenheit)) {
    return fahrenheit
  }
  return fahrenheit.toFixed(1);
};

const convertToFahrenheit = function(cels) {
  let celsius = 0;
  celsius = ((cels - 32) * (5/9));
  //checks if this is a whole number
  if (celsius === Math.floor(celsius)) {
    return fahrenheit
  }
  return celsius.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
