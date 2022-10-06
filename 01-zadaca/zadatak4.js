// Zadatak 4 - funkcija koja pretvara broj X u sate i minute

let convertToHours = (minutes) => {
  let hours = Math.floor(minutes / 60)
  let remainingMinutes = minutes % 60
  return hours + " hrs, " + remainingMinutes + " mins"
}

console.log(convertToHours(120)) // 2 hrs, 0 mins
console.log(convertToHours(121)) // 2 hrs, 1 mins
console.log(convertToHours(59)) // 0 hrs, 59 mins
console.log(convertToHours(63)) // 1 hrs, 3 mins
