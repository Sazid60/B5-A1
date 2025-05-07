// Problem 1:
// Description: Create a function that takes a string and an optional boolean.

// If the boolean is true or not provided, return the string in uppercase.
// If the boolean is false, return the string in lowercase.

function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLocaleLowerCase();
  } else {
    return input.toLocaleUpperCase();
  }
}

// console.log(formatString("Hello")); // Output: "HELLO"
// console.log(formatString("Hello", true)); // Output: "HELLO"
// console.log(formatString("Hello", false)); // Output: "hello"

// Problem 2:
// Description: Create a function that filters an array of objects by the rating property, returning only items with a rating of 4 or more.

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const filteredItems = items.filter((item) => item.rating >= 4);
  return filteredItems;
}

// const books = [
//   { title: "Book A", rating: 4.5 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 5.0 },
// ];

// console.log(filterByRating(books));
// // Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]

// Problem 3:
// Description: Create a generic function that concatenates multiple arrays of the same type using rest parameters.

// Function Signature:

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const concatenatedArray: T[] = [];
  arrays.forEach((element) => {
    concatenatedArray.push(...element);
  });

  return concatenatedArray;
}

// console.log(concatenateArrays(["a", "b"], ["c"])); // Output: ["a", "b", "c"]
// console.log(concatenateArrays([1, 2], [3, 4], [5])); // Output: [1, 2, 3, 4, 5]
