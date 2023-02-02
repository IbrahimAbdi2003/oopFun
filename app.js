let myArray = [
    ['one', 2, 'three'],
    [true, false, undefined],
    [null, 'five', 6]
  ];

function logValues(multiArray) {
    for (let i = 0; i < multiArray.length; i++) {
      for (let j = 0; j < multiArray[i].length; j++) {
        console.log(multiArray[i][j]);
      }
    }
  }
  let multiArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  logValues(multiArray);

  let largestNumber = (num1, num2) => {
    return num1 > num2 ? num1 : num2;
  };
  
  console.log(largestNumber(10, 20));

  function compareValues(a, b) {
    if (a === b) {
      return 'Values are equal';
    } else {
      return 'Values are not equal';
    }
  }
  
  console.log(compareValues(10, 10)); 
  console.log(compareValues('10', 10));

  function compareValues(a, b) {
    if (a === b) {
      return;
    } else {
      return;
    }
  }
  
  console.log(compareValues(5, 5));
  console.log(compareValues(5, 6));