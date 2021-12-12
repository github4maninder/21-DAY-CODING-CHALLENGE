const parseMissionSummary = (exchanges, missionData) => {
  // Code here!
  let obj = {};
  let result = [];
  for(let key of exchanges){
    result.push( `${key.origin}: ${key.message}`);   
  }
  obj.transcript= result;
  obj.missionData= missionData
  return obj;
}

// Examples

// Input:


//  const exchanges = [
//    {origin:"MC", message:"So how is it out there?"},
//    {origin:"Shuttle", message:"Oh it's pretty nice!"},
//    {origin:"MC", message:"Did you like the challenges?"},
//  ]
    
//  const missionData = {
//    astro:["...","..."], 
//    bio:["..."], 
//    physics:["..."]
//  }
    
// Output:


//  {
//    transcript:
//    [
//      "MC: So how is it out there?",
//      "Shuttle: Oh it's pretty nice!",
//      "MC: Did you like the challenges?"
//    ],
//    missionData:{
//      astro:["...","..."], 
//      bio:["..."], 
//      physics:["..."]
//    }
//  }
