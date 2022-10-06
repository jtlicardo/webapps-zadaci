// Zadatak 9 - funkcija koja prima 2 objekta, te u slučaju da imaju iste ključeve vraća true

let check = (obj1, obj2) => {
  let keysSame = true

  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false

  for (let i = 0; i < Object.keys(obj1).length; i++) {
    if (Object.keys(obj1)[i] !== Object.keys(obj2)[i]) keysSame = false
  }

  return keysSame
}

objekt1 = {
  ime: "Ivan",
  godine: 30,
}

objekt2 = {
  ime: "Marko",
  godine: 50,
}

objekt3 = {
  marka: "Volkswagen",
  model: "Golf",
}

objekt4 = {
  ime: "Iva",
  godine: 40,
  spol: "Ž",
}

console.log(check(objekt1, objekt2)) // true
console.log(check(objekt1, objekt3)) // false
console.log(check(objekt4, objekt1)) // false
console.log(check(objekt2, objekt1)) // true
