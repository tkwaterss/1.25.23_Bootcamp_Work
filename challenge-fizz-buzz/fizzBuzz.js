// Write your solution below this line:

//Starting w/ for loop to cycle from 1 to 50
for (let i = 1; i <= 50; i++) {
    //Using a series of if else statements to check for conditions
    //first if i is divisible by both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
        //then if divisible by 3
    } else if (i % 3 === 0) {
        console.log("fizz");
        //then if divisible by 5
    } else if (i % 5 === 0) {
        console.log("buzz");
        //if not divisible then print the number
    } else {
        console.log(i);
    }
}

//Alternate creative solution

// for (let i = 1; i <= 50; i++) {
//     console.log(
//       [i, 'fizz', 'buzz', 'fizzbuzz'][(i % 3 === 0) + 2 * (i % 5 === 0)]
//     )
//   }

  //The firt array give options for the second array to display
  //The second array is a operation that determines which value of the first array
    //to siplay
  //