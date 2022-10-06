// Zadatak 5 - funkcija kojoj se predaje polje brojeva, te ona ispisuje brojeve dijeljive s 3

let divisibleByThree = (list) => {
  let result = []
  for (let el of list) {
    if (el % 3 === 0) result.push(el)
  }
  for (let el of result) {
    console.log(el)
  }
}

divisibleByThree([1, 2, 3, 4, 5, 6, 7, 8, 9]) // 3, 6, 9
