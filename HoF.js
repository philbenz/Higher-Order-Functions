/*any, greaterThan10, surprise, filter, onlyOdd, sumTwoNumbers*/
console.log("////Greater than 10////");
function greaterThan10(array) {
  return array.sort(function(a,b) { return b-a; } );
}

function any(array, over10FN) {
  var sortedArray = new Array();
  sortedArray = over10FN(array);
  console.log(sortedArray);
  if(sortedArray[0] > 10) {
    return true;
  }
  return false;
}

var myArray = [8, 9, 10, 11];
console.log(any((myArray), greaterThan10));


var my2Array = [8, 9, 5, 3];
console.log(any((my2Array), greaterThan10));


console.log("////filter////");
function onlyOdd(array) {

  var onlyOdds = new Array();

  for(i=0; i < array.length; i++) {
    if(array[i]%2 > 0) {
      onlyOdds.push(array[i]);
    }
  }
    return onlyOdds;
}

function filter(array, checkOddFN) {

  var onlyOddArray = new Array();

  return onlyOddArray = onlyOdd(array);

}

console.log((filter([ 1, 2, 3, 4 ], onlyOdd)));
console.log((filter([ 1, 3, 5, 7 ], onlyOdd)));
console.log((filter([12, 11, 1, 4], onlyOdd)));

console.log("////surprise!////");
function surprise () {
  return function () {
    return "Surprise!";
  }
}

console.log(surprise()());


console.log("/////sum 2 numbers/////");
function sumTwoNumbers (num) {
  return function (input) {
    return input + num;
  }
}

console.log(sumTwoNumbers(1)(4));
console.log(sumTwoNumbers(3)(16));
console.log(sumTwoNumbers(NaN)(Infinity));

console.log("//// Palindrome BONUS! ////");

function isPalindrome(text) {

  if(text.toLowerCase().split('').reverse().join('') === text)  {
    return true;
  }
  return false;
}


console.log(isPalindrome('nonon'));  //true
console.log(isPalindrome('racecar'));  //true
console.log(isPalindrome('phil'));  //false
console.log(isPalindrome('Racecar'));  //false
