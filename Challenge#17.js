const switchSpecificToggle = (toggleList, specificToggle) => {
  // Code here!
  for (let toggle of toggleList) {
    if (toggle.name === specificToggle) {
      toggle.isOn = !toggle.isOn;
    }
  }
  return toggleList;
}

// Input:


// const toggleList = [
//   {
//     name: "toggleA",
//     isOn: false
//     }, 
//   {
//     name: "toggleB",
//     isOn: true
//   }
// ]
// const specificToggle = "toggleA"
    
// Output:


// [
//   {
//     name: "toggleA",
//     isOn: true
//   }, 
//   {
//     name: "toggleB",
//     isOn: true
//   }
// ]
		
