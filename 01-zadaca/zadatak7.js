// Zadatak 7 - funkcija koja za dani broj provjerava nalazi li se unutar [0, 1000], te množi sve višekratnike broja 7
// do X te ispisuje rezultat

let func = (x) => {
  let result = 1
  if (x >= 0 && x <= 1000) {
    for (let i = 1; i <= x; i++) {
      if (i % 7 === 0) result *= i
    }
    return result
  } else return -1
}

console.log(func(23)) // 2058
