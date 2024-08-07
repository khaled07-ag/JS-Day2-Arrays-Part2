function isArrayLengthOdd(numbers) {
    // Your code here
    let nums = numbers.length;
    if(nums%2==1){
        return true;
    }else{
        return false;
    }
  }
  console.log(isArrayLengthOdd([1,2,3,4]));
  function isArrayLengthEven(numbers) {
    // Your code here
    let nums = numbers.length;
    if(nums%2==0){
        return true;
    }else{
        return false;
    }
  }
  console.log(isArrayLengthEven([1,2,3,4]))

  function addLailaToArray(instructors) {
    // Your code here
    instructors.push('Laila');
    return instructors;
  }
  console.log(addLailaToArray(['Ahmad',"Khaled"]));
  function eliminateTeam(teams) {
    // Your code here
    teams = teams.at(teams.length-1);
    return teams;
  }
  console.log(eliminateTeam(["Brazil", "Germany", "Italy"]));
  function secondHalfOfArrayIfItIsEven(fruits) {
    // Your code here
    let half = fruits.length/2;
    if(fruits.length%2==0){
        fruits= fruits.slice(half,fruits.length);
        return fruits;
    }else{
        return [];
    }
  }
  console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]));
  