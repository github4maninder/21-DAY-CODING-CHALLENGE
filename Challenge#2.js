const generateAstronautTag = (astronaut) => {
  // Code here!

  // Remember to return a value!
  return (`${astronaut.prefix}: ${astronaut.firstName} "${astronaut.nickname}" ${astronaut.lastName}`);
};


// Examples

// Input:


//     const exampleAstronaut = {
//       firstName: "Yuri",
//       lastName: "Gagarin",
//       nickname: "First!",
//       prefix: "Cosmonaut"
//     }
    
// Output:


//     Cosmonaut: Yuri "First!" Gagarin
    
// Input:


//     const exampleAstronaut = {
//       firstName: "Neil",
//       lastName: "Armstrong",
//       nickname: "Steps",
//       prefix: "Astronaut"
//     }
    
// Output:


//     Astronaut: Neil "Steps" Armstrong
    
