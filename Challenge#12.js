
const parseTranscripts = (messages) => {
  // Code here!
  let resultArr = [];
  for (let key of messages) {
    resultArr.push(`${key.origin}: ${key.message}`);
  }
  return resultArr;
}

// Examples

// Input:


//     const messages = [
//       {origin:"MC", message:"Hello!"},
//       {origin:"Shuttle", message:"Hey!"},
//     ]
    
// Output:


//     [
//       "MC: Hello!",
//       "Shuttle: Hey!"
//     ]
