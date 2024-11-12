// Write a function that declares variables using var, let, and const. Attempt to reassign each variable within the same function scope, and observe the outcome. Explain any differences in behavior.
function myFunction() {
        var a = 10;
        let b = 20;
        const c = 30;
        a = 15;
        b = 25;
        //c = 35; // ei line ta error dibe karon amra cost er value change korte parbo na tai comment kore dilam
        console.log(a); //output hobe 15
        console.log(b); //output hobe 25
        console.log(c); //output hobe 30
    }
    myFunction();
    
// Create a function named greet that takes two parameters: name and greeting, with greeting having a default value of "Hello". If no greeting is provided, the function should output "Hello, [name]!".
function greet(name, greeting = "Hello") {
        console.log(`${greeting}, ${name}!`);
}
greet("Tushar"); //zodi amra greeting er jonno kono value na dile default value ta print hobe
greet("sunny", "Hi"); //ar zodi value diye deile hi ta print hobe

// Using template literals, write a function that takes three parameters: firstName, lastName, and age, and returns a string in the format: "My name is [firstName] [lastName] and I am [age] years old.".
const firstName = "IH-";
const lastName = "Tushar";
const age = 26;
function introduction(firstName, lastName, age) {
        return `My name is ${firstName} ${lastName} and I am ${age} years old.`
    }
    console.log(introduction(firstName, lastName, age));

// Write an arrow function named add that takes two parameters and returns their sum. Rewrite it as a one-line function without using the return keyword.
const add = (a,b) => a+b;

const result = add(50,789);
console.log(`sum: ${result}`);


// Write a function that accepts any number of arguments and returns the maximum value among them using the spread operator. Test it with varying numbers of arguments.
function max (...num){
    return Math.max(...num)
}
console.log(`maxium number: ${max(1,2,3,4,5)}`); 
// Create a function mergeArrays that takes two arrays as arguments and returns a single array containing all elements of the two arrays, without modifying the original arrays, using the spread operator.
function mergeArrays(arr,arr1){
    return [...arr,...arr1]
}
const arr = [1,2,3]
const arr1 = [4,5,6]

const merge_Arrays_Result = mergeArrays(arr,arr1)
console.log(merge_Arrays_Result);

// Given an object person with properties name, age, and country, write a function that extracts name and country using object destructuring and returns them in an array.

const person = {
    name:"Tushar",
    age:25,
    country:"bangladesh"
}
function extractNameAndCountry(person) {
    const { name, country } = person;
    return [name, country]; 
  }
  
  const results5 = extractNameAndCountry(person);
  console.log(results5); 
  

// Write a function that takes an array of numbers as input, and uses array destructuring to extract the first, second, and third elements, returning them in an object with properties first, second, and third.
function extractNumbers(arr) {
    const [first, second, third] = arr;
    return { first, second, third };
  }
  
  const numbers = [1, 2, 3];
  const extractedNumbers = extractNumbers(numbers);
  console.log(extractedNumbers);

// Create a function that takes an object representing a book with properties title, author, year, and publisher. Use destructuring to extract title and author, and return a formatted string: "Title: [title], Author: [author]".
function extractBookDetails(book) {
    const { title, author } = book;
    return `Title: ${title}, Author: ${author}`;
  }
  
  const book = {
    title: "hatekolome javascript",
    author: "junayed ahmed",
    year: 2020,
    publisher: "odommo prokachoni"
  };
  
  const bookDetails = extractBookDetails(book);
  console.log(bookDetails);



// Given an array of numbers, write a function that uses the spread operator to copy the array, then adds a new number at the end without modifying the original array.
function addNumber(arr, num) {
    const copiedArray = [...arr];
    copiedArray.push(num);
    return copiedArray;
  }
  
  const numbers3 = [1, 2, 3];
  const newNumbers = addNumber(numbers3, 4);
  console.log(newNumbers);