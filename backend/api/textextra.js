const express = require('express');
const puppeteer = require('puppeteer');

const router = express.Router();

router.post('/extract-text', async (req, res) => {
    const { url } = req.body;
    console.log(url);

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    try {
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox'], // Additional flags if needed
        });
        const page = await browser.newPage();

        try {
            await page.goto(url, {
                waitUntil: 'networkidle2',
                timeout: 60000, // Increased timeout to 60 seconds
            });
        } catch (error) {
            console.error('Error navigating to the page:', error);
            await browser.close();
            return res.status(500).json({ error: 'Failed to load the page' });
        }

        const extractedText = await page.evaluate(() => document.body.innerText);

        await browser.close();

        res.json({ text: extractedText });
    } catch (error) {
        console.error('Error extracting text:', error);
        res.status(500).json({ error: 'Failed to extract text' });
    }
});

module.exports = router;
