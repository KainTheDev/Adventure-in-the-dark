const express = require('express')
const { join } = require('path')
const app = express()
const port = 2000

app.use(express.static(join(process.cwd(), 'content')))

app.get('/', (req, res) => {
  res.sendFile(join(process.cwd(), 'main.html'))
})

app.get('/*', function (req, res) {
  res.sendStatus(404)
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})