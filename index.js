const people = [
    { name: "bob", age: "21" },
    { name: "mary", age: "17" },
    { name: "jill", age: "35" },
    { name: "jake", age: "52" }
  ];
  // input: array of people
  // return: name of oldest person
  function oldestPerson(arr) {
   const oldestPeople = arr.sort(function(a,b) {
    const lastPerson = parseInt(a.age);
    const nextPerson = parseInt(b.age);
    if (lastPerson > nextPerson) {
      return -1;
    } else {
      return 1;
    }
  }); return oldestPeople[0].name;
  }
  
  oldestPerson(people);
  // input: array of people
  // return: averag age
  
  function averageAge(arr) {
    let sum = arr.map(arr => parseInt(arr.age)).reduce((accum, val)=>{
      return accum + val;
    }); return sum/arr.length;
  }
  averageAge(people);
  
  const randomString = "abbsshshaaabd";
  // input: string
  // return: most frequent character
  function mostFrequent(s) {
    // return most frequen character
    let max = 0;
    let maxChar = '';
    s.split('').forEach(char => {
      if(s.split(char).length > max){
        max = s.split(char).length;
        maxChar = char;
      }
    }); 
    return maxChar;
  }
  
    // forEach(function(char){
    //   if(str.split(char).length > max) {
    //       max = str.split(char).length;
    //       maxChar = char;
    //    }
    // });
  
  mostFrequent(randomString);
  // count the number of list items on the page
  