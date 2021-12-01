const listAstronautJobs = (roster) => {
  // Code here!
  const result = [];

  for(let obj of roster){
    for(let key in obj){
      if(key === 'job'){
        result.push(obj[key]);
      }
    }
  }
  return result;
}

// Examples

// Input:


//     const exampleRoster = [
//       {
//         ...
//         job:"Shuttle DJ"
//       },
//       {
//         ...
//         job:"Space Cook"
//       }
//     ] 
    
// Output:


//     ["Shuttle DJ", "Space Cook"]
    
