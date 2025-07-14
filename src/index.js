import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ For React 18+
import App from './App';                 // ✅ Import the App component
import './index.css';                    // Optional: Your CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
