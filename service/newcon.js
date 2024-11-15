const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3022;

app.get('/classB/dvds/all/:location', async (req, res) => {
    const location = req.params.location;
    try {
        const response = await axios.get('http://localhost:3035/dvds/all/' + location);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/classB/books/all/:location', async (req, res) => {
    const location = req.params.location;
    try {
        const response = await axios.get('http://localhost:3034/books/all/' + location);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/classB/laptops/all/:location', async (req, res) => {
    const location = req.params.location;
    try {
        const response = await axios.get('http://localhost:3036/laptops/all/' + location);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
});

 app.get('/classB/dvds/team', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3035/dvds/team');
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/classB/books/team', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3034/books/team');
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/classB/laptops/team', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3036/laptops/team');
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
}); 

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});