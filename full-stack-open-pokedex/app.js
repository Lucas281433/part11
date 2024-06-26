// eslint-disable-next-line no-undef
const express = require('express')
require('dotenv').config()
const app = express()

// get the port from env variable
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000

app.get('/version', (req, res) => {
  res.send('1')
})

app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  //if (true) throw('error...  ')
  res.send('ok')
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on port ${PORT}`)
})
