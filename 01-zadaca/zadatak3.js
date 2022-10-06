// Zadatak 3 - funkcija koja provjerava nalazi li se dani broj X unutar [100, 150000]

let check = (num) => (num >= 100 && num <= 150000 ? true : false)

console.log(check(100)) // true
console.log(check(99)) // false
console.log(check(150000)) // true
console.log(check(5555)) // true
console.log(check(150001)) // false
