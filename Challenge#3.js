
const checkGaugeStatus = (gauge) => {
  // Code here!

  // Remember to return a value!
  if (gauge.current > gauge.min && gauge.current < gauge.max ) {
    return true;
 }
 return false
};

// Examples

// Input:


//     const exampleGauge = {
//       current:0.4,
//       min:0.1,
//       max:0.9
//     }
    
// Output:


//     true
    
// Input:


//     const exampleGauge = {
//       current:1.4,
//       min:0.1,
//       max:0.4
//     }
    
// Output:


//     false
    
