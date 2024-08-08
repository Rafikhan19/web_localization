import React, { useState } from 'react';
import axios from 'axios';
import './home.css';

const Home = () => {
    const [url, setUrl] = useState('');
    const [language, setLanguage] = useState('');
    const [iframeUrl, setIframeUrl] = useState('');
    const [extractedText, setExtractedText] = useState('');

    const languages = [
        'Hindi', 'Assamese', 'Bengali', 'Gujarati', 'Kannada', 'Malayalam', 
        'Marathi', 'Odia', 'Punjabi', 'Tamil', 'Telugu', 'English'
    ];

    const onSubmit = async (e) => {
        e.preventDefault();
        setIframeUrl(url);

        try {
            const response = await axios.post('http://localhost:3000/api/textextra/extract-text', { url });
            setExtractedText(response.data.text);
        } catch (error) {
            console.error('Error fetching extracted text:', error);
        }
    };

    return (
        <div className="home-container">
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="url">Website URL:</label>
                    <input
                        type="text"
                        id="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Enter website URL"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="language">Select Language:</label>
                    <select
                        id="language"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        required
                    >
                        <option value="" disabled>Select a language</option>
                        {languages.map((lang) => (
                            <option key={lang} value={lang}>
                                {lang}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
            {iframeUrl && (
                <iframe
                    src={iframeUrl}
                    title="Website"
                    width="100%"
                    height="500px"
                    style={{ border: 'none', marginTop: '20px', width: '500px', height: '500px' }}
                />
            )}
            {extractedText && (
                <div className="extracted-text">
                    <h2>Extracted Text:</h2>
                    <p>{extractedText}</p>
                </div>
            )}
        </div>
    );
};

export default Home;