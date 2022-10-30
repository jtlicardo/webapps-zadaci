import express from "express"
import bodyParser from "body-parser"
const app = express()
const port = 3000

app.use(bodyParser.json())

let id = 1
let obavijesti = []

let getCurrentDate = () => {
  const date = new Date()
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  return day + "." + month + "." + year + "."
}

app.post("/dodaj-obavijest", (req, res) => {
  let obavijest = {
    id,
    naziv: req.body.naziv,
    sadrzaj: req.body.sadrzaj,
    datum: getCurrentDate(),
  }
  obavijesti.push(obavijest)
  id++
  res.send(obavijest)
})

app.get("/vrati-obavijesti", (req, res) => {
  let tempArr = []
  for (let o of obavijesti) {
    let tempObj = {
      naziv: o.naziv,
      datum: o.datum,
    }
    tempArr.push(tempObj)
  }
  res.send(tempArr)
})

app.get("/vrati-obavijest/:id", (req, res) => {
  let obavijestPronadena = false
  for (let o of obavijesti) {
    if (o.id === parseInt(req.params.id)) {
      obavijestPronadena = true
      res.send({
        naziv: o.naziv,
        sadrzaj: o.sadrzaj,
        datum: o.datum,
      })
    }
  }
  if (!obavijestPronadena) res.send({ naziv: "", sadrzaj: "", datum: "" })
})

app.patch("/izmijeni-obavijest/:id", (req, res) => {
  let paramId = req.params.id
  let result = obavijesti.find((o) => o.id === parseInt(paramId))
  result.sadrzaj = req.body.sadrzaj
  res.send(result)
})

app.listen(port, () => console.log(`Works on port ${port}`))
