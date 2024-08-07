import React from 'react';
import './landing.css';

const Landing = () => {
  return (
    <div className="landing-page">
      <header>
        <div className="button-container">
          <a href="/login" className="button">Login</a>
          <a href="/register" className="button">Signup</a>
        </div>
      </header>
      <main>
        <div className="test-section">
          <h1>Language Localization </h1>
          <p> Languages Localization of websites</p>
          <ul>
            <li><strong>Hindi:</strong> नमस्ते, आप कैसे हैं?</li>
            <li><strong>Bengali:</strong> হ্যালো, আপনি কেমন আছেন?</li>
            <li><strong>Gujarati:</strong> હેલો, કેમ છો?</li>
            <li><strong>Odia:</strong> ହେଲୋ, ଆପଣ କେମିତି ଅଛନ୍ତି?</li>
            <li><strong>Punjabi:</strong> ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ਤੁਸੀਂ ਕਿਵੇਂ ਹੋ?</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Landing;
