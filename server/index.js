require('dotenv').config()
const express = require("express");
const app = express();
const axios = require("axios");
const cors = require('cors')

app.use(express.json())
app.use(cors())

const BASE_URL = "https://www.foodandco.fi/api/restaurant/menu"
const ids = { "carelia": 179271, "bistro": 274364, "rabbit": 225003 }

/*const date = new Date()
const today = date.toISOString()*/

const today = "2022-11-7"

app.get('/api/careliamenu', (req, res) => {
    axios.get(`${BASE_URL}/day?date=${today}&language=fi&restaurantPageId=${ids.carelia}`)
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error)
        })
});

app.get('/api/bistromenu', (req, res) => {
    axios.get(`${BASE_URL}/day?date=${today}&language=fi&restaurantPageId=${ids.bistro}`)
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error)
        })
});

app.get('/api/rabbitmenu', (req, res) => {
    axios.get(`${BASE_URL}/day?date=${today}&language=fi&restaurantPageId=${ids.rabbit}`)
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