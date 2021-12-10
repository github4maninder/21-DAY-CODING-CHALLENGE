const organizeData = (receivedData) => {
  // Code here!
  let obj = {};
  for (let key of receivedData) {
    //Check if current key exists in obj object, if not, add value as a first value in an empty array
    if (!obj[key.type]) {
      obj[key.type] = [key.data];
    } else {
      //If it does exist, push the second value to the value array
      obj[key.type].push(key.data);
    }
  }

  return obj;
}

// Input:


// const listOfReceivedData = [
//   {type: "astro", data: "Saturn Data"},
//   {type: "bio", data: "Space Potatoes"},
//   {type: "physics", data: "Lagrange Points"},
//   {type: "bio", data: "OMG Tardigrades"},
//   {type: "physics", data: "Material reflectivity"},
//   {type: "astro", data: "Mercury is not the hottest"},
// ]
    
// Output:


// {
//   "astro":  ["Saturn Data", "Mercury is not the hottest"],
//   "bio": ["Space Potatoes", "OMG Tardigrades"],
//   "physics": ["Lagrange Points", "Material reflectivity"],
// }
