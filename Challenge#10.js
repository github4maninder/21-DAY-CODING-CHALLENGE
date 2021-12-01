const averageWindSpeed = (weatherEntries) => {
  // Code here!
let windSpeedArr = [];

  for( let obj of weatherEntries ){ // enter in array
    for( let key in obj){   //enter in objects
      if (key === 'windSpeed' ) {
        let result = obj[key];
        windSpeedArr.push(result);
      }
    }
  }
  
  let sumOfWindSpeedArr = 0;
  for( let key of windSpeedArr){
    sumOfWindSpeedArr += key;
  }

  let avgWindSpeedArr = Math.round(sumOfWindSpeedArr/(windSpeedArr.length));

  return avgWindSpeedArr;

}


// Examples

// Input:


//     const exampleEntries = [
//       { 
//         temperature:0, 
//         weather:"sunny", 
//         windDirection: "NNE", 
//         windSpeed:24
//       },
//       { 
//         temperature:10, 
//         weather:"cloudy", 
//         windDirection: "NNE", 
//         windSpeed:9 
//       }
//     ] 
    
// Output:


//     17
    
