let express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/new', (req, res) => {
    res.send("<h2>I know Express is very powerful</h2>")
  })

  app.get('/test', (req, res) => {
    res.json({
        server : "Express",
        endpoint : "Test",
        api : "RestFul"
    })
  })

console.log("Rest API is listening at 9000")

app.listen(9000)