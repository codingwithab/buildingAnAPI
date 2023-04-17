const express = require("express")
const app = express()
const PORT = 8080

app.use(express.json())

app.listen(PORT, () => console.log(`it's live on http://localhost:${PORT}`))

app.get("/car", (req, res) => {
  res.status(200).send({
    car: "Porsche",
    model: "Cayman"
  })
})

app.post("/car/:id", (req, res) => {
  const { id } = req.params
  const { logo } = req.body

  if (!logo) {
    res.status(418).send({ message: "Need a logo!" })
  }

  res.send({
    message: `Porsche with your ${logo} and ID of ${id}`
  })
})
