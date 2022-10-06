// Zadatak 8 - funkcija koja vraća predano polje obrnutim redoslijedom

let reverse = (arr) => {
  return arr.reverse()
}

console.log(reverse([3, 4, 5, 6])) // [6, 5, 4, 3]

// Druga funkcija

let reverse2 = (arr) => {
  let temp = []
  while (arr.length > 0) temp.push(arr.pop())
  return temp
}

console.log(reverse2([1, 2, 3])) // [3, 2, 1]
