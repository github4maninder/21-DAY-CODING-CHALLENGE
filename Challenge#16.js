const getAverageSpeed = (firstPosition, secondPosition) => {
  // code here!
  const distance = secondPosition.altitude - firstPosition.altitude;
  
  const beforeTime = new Date(firstPosition.time);
  const afterTime = new Date(secondPosition.time);
  const time =
    Math.abs((afterTime.getTime() - beforeTime.getTime()) / 1000) * 1000;

  let speed = distance / time;

  return Math.round(speed * 10) / 10;
}

// Examples

// Input:


//   const firstPosition = {
//     time: 1637074462,
//     altitude: 1100
//   }
//   const secondPosition = {
//     time: 1637074558,
//     altitude: 2200
//   }
    
// Output:


//   11.5
