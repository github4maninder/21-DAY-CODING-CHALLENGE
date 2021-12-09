const chooseLunchWinner = (listOfChoices) => {
  let choice = listOfChoices[0];
  let max = 0;
  const choiceCounts = {};

  for (const word of listOfChoices) {
    let countWord = choiceCounts[word] || 0;
    choiceCounts[word] = countWord + 1;
  }

  const arrOfobj = Object.entries(choiceCounts);
  // console.log(choiceCounts, choice, arrOfobj);

  for (const [word, wordCount] of arrOfobj) {
    if (wordCount > max) {
      max = wordCount;
      choice = word;
    }
  }
  return choice;
};

// Examples

// Input:


//     const listOfChoices = [
//       "Chicken Dinner",
//       "Chicken Dinner",
//       "Chicken Dinner",
//       "Ice Cream Sandwich", 
//       "Ice Cream Sandwich"
//     ]
// Output:


//     Chicken Dinner
    
