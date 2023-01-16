let numbers = ['4', '5', '3', '1', '2'];

function tri(numbers, order) {
  if (order === "asc") {
    return numbers.sort((a, b) => a - b);
  } else if (order === "desc") {
    return numbers.sort((a, b) => b - a);
  }
}

console.log(tri(numbers, "asc")); 

