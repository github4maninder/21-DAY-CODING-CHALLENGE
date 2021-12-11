const confirmReentryPlans = (speed, missionData, checks) => {
  // Code here!
  if(speed >= checks.minSpeed && speed <=checks.maxSpeed && ((missionData.astro).length) === (checks.dataEntries["astro"]) && ((missionData.bio).length) === (checks.dataEntries["bio"]) && ((missionData.physics).length) === (checks.dataEntries['physics'])){
    return true;
  }
  return false;
}

// Examples

// Input:


//   const speed = 40
//   const missionData = {
//     astro:["...","..."], 
//     bio:["..."], 
//     physics:["..."]
//   }

//   const checks = {
//     maxSpeed:50,
//     minSpeed:20,
//     dataEntries:{
//       astro:3,
//       bio:1,
//       physics:1
//     }
//   }
    
// Output:


//   false // Not the same amount of entries
    
