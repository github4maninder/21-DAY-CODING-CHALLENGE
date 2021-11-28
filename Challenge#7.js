const storeWeatherConditions = (temperature, condition, windSpeed, windDirection) => {
  // Code here!

  // Remember to return an object!
    let conTemperature;
  conTemperature = Math.round((temperature - 32) * 5 / 9);
  let conSpeed;
  conSpeed = Math.round(windSpeed / 2.237);
  const result = {
    'temperature': conTemperature,
    'condition':condition,
    "windSpeed":conSpeed,
    "windDirection": windDirection
  };
      
  return result;
}

// Examples

// Input:


//     const temperature = 32
//     const condition = "Sunny with small clouds"
//     const windSpeed = 20
//     const windDirection = "NNE
    
// Output:


//     {
//       temperature:0,
//       windSpeed:9,
//       windDirection:"NNE",
//       condition:"Sunny with small clouds"
//     }
    
