const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

// Middleware
app.use(bodyParser.json())
app.use(cors())

// Routes
const contact = require('./routes/api/contact')
app.use('/api/contact', contact)

// Port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server stated on ${port} port!`))
