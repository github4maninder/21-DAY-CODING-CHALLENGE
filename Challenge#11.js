const missionDate = "2021-12-12"
    const platformList = [
      {
        name:"Platform A",
        bookDate:"2021-12-11"
      },
      {
        name:"Platform B",
        bookDate:undefined
      },
      {
        name:"Platform C",
        bookDate:undefined
      },
    ] 
    
    const bookFreePlatform = (platformList, missionDate) => {
       // Code here!
        for(let obj in platformList) {
          if(platformList[obj].bookDate === undefined) {
             platformList[obj].bookDate = missionDate;
               return platformList;
          }
        }
    }
    
    
// Output:


//     const platformList = [
//       {
//         name:"Platform A",
//         bookDate:"2021-12-11"
//       },
//       {
//         name:"Platform B",
//         bookDate:"2021-12-12"
//       },
//       {
//         name:"Platform C",
//         bookDate:undefined
//       },
//     ] 
