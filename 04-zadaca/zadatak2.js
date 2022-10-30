import express from "express"
import bodyParser from "body-parser"
const app = express()
const port = 3000

app.use(bodyParser.json())

let id = 1
let autori = []

let checkStrings = (arr) => {
  for (let el of arr) {
    if (el.length > 20)
      return {
        string: el,
        success: false,
      }
  }
  return {
    string: "",
    success: true,
  }
}

let getCurrentDate = () => {
  const date = new Date()
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  return day + "." + month + "." + year + "."
}

app.post("/dodaj-autora", (req, res) => {
  let data = req.body
  if (
    Object.keys(data).length !== 2 ||
    !data.hasOwnProperty("naziv") ||
    !data.hasOwnProperty("djela")
  ) {
    res.status(500).send({ error: "Krivi kljucevi" })
    return
  }
  let checkResult = checkStrings(data.djela)
  if (checkResult.success === false) {
    let djelo = checkResult.string
    res.status(500).send({ error: `Djelo ${djelo} ima vise od 20 znakova` })
    return
  }
  let autor = {
    id,
    naziv: req.body.naziv,
    djela: req.body.djela,
    datum: getCurrentDate(),
  }
  id++
  autori.push(autor)
  res.send(autor)
})

app.get("/vrati-autore", (req, res) => {
  let tempArr = []
  for (let a of autori) {
    let tempObj = {
      naziv: a.naziv,
      djela: a.djela,
    }
    tempArr.push(tempObj)
  }
  res.send(tempArr)
})

// Ruta za brisanje djela brise iz liste djela autora jedno djelo
// Buduci da nije navedeno koje djelo treba obrisati, brise se zadnje djelo u arrayu
app.delete("/izbrisi-djelo/:id", (req, res) => {
  let id = req.params.id
  let autor = autori.find((a) => a.id === parseInt(id))
  let indexAutora = autori.indexOf(autor)
  autor.djela.pop()
  let noviAutor = {
    ...autor,
    djela: autor.djela,
  }
  autori[indexAutora] = noviAutor
  res.send(autori)
})

app.listen(port, () => console.log(`Works on port ${port}`))
