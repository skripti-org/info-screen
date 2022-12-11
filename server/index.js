require('dotenv').config()
const express = require("express");
const app = express();
const axios = require("axios");
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get('/api/careliamenu', (req, res) => {
    axios.get(`https://www.compass-group.fi/menuapi/feed/json?costNumber=0417&language=fi`)
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error)
        })
});

app.get('/api/bistromenu', (req, res) => {
    axios.get(`https://www.compass-group.fi/menuapi/feed/json?costNumber=0433&language=fi`)
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error)
        })
});

app.get('/api/rabbitmenu', (req, res) => {
    axios.get(`https://www.compass-group.fi/menuapi/feed/json?costNumber=041703&language=fi`)
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error)
        })
});

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})