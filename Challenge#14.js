const switchAllTogglesOn = (toggleList) => {
  // Code here!
  for (let toggle of toggleList) {
    if (toggle.isOn === false) {
      toggle.isOn = true;
    }
  }
  return toggleList;
}

// Examples

// Input:


// const toggleList = [
// 	{
// 		name:"Air",
// 		isOn:true
// 	},
// 	{
// 		name:"Radio",
// 		isOn:false
// 	},
// ]
    
// Output:


// [
// 	{
// 		name:"Air",
// 		isOn:true
// 	},
// 	{
// 		name:"Radio",
// 		isOn:true
// 	},
// ]
