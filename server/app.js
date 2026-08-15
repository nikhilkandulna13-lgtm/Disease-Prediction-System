const express = require('express')
const app = express()
const predictRoute = require('./routes/predict')

const cors = require('cors');
app.use(cors());

app.use(express.json())

app.use('/predict', predictRoute)

app.listen(5000, () => console.log("Server running on port 5000"))