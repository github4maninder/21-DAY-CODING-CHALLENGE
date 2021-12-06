const timeRemaining = (launchDate, missionName, fakeToday) => {
  const today = fakeToday || new Date() // Do not alter this line!

  // Code here!
  let result = {};

  const diffDays = Math.ceil(
    Math.abs(new Date(launchDate) - new Date(today)) / (1000 * 60 * 60 * 24)
  );

  result.missionName = missionName;
  result.daysRemaining = diffDays;

  return result;
}

// Examples

// Input:


//     const launchDate = "2021-12-12"
//     const fakeToday = "2021-12-01"
//     const missionName = "Moon visit"
    
// Output:


//     {
//       missionName = "Moon visit",
//       daysRemaining = 11
//     }
