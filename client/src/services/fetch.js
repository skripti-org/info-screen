import axios from 'axios';

const BASE_URL = "/api"

const fetchCarelia = async () => {
    const response = await axios.get(`${BASE_URL}/careliamenu`)
    return response.data
}

const fetchBistro = async () => {
    const response = await axios.get(`${BASE_URL}/bistromenu`)
    return response.data
}

const fetchRabbit = async () => {
    const response = await axios.get(`${BASE_URL}/rabbitmenu`)
    return response.data
}

const fetchEvents = async () => {
    const response = await axios.get('https://skripti.org/calendarApi')
    return response.data
}

export default { fetchBistro, fetchCarelia, fetchRabbit, fetchEvents }