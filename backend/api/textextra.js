const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const router = express.Router();

router.post('/extract-text', async (req, res) => {
    try {
        const { url, targetLanguage } = req.body;

        
        if (!url || !targetLanguage) {
            return res.status(400).json({ error: 'URL and target language are required' });
        }

        // Fetch the HTML of the page
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        const text=$('body').text();
       
        

        if (!text) {
            return res.status(404).json({ error: 'No visible text found on the page' });
        }

        res.json({ text });
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).send('Error processing request');
    }
});

module.exports = router;