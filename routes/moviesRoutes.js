const express = require('express');
const axios = require('axios');
const router = express.Router();

const TMDB_API_KEY = 'b3d7446b10941bd257a79bfe00de14e5';
const OMDB_API_KEY = '9cfa16c4';

//TMDb
router.get('/popular', async (req, res) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`);
        res.json(response.data.results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//OMDb
router.get('/details/:title', async (req, res) => {
    const title = req.params.title;
    try {
        const response = await axios.get(`http://www.omdbapi.com/?t=${title}&apikey=${OMDB_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
