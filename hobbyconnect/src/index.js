import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'; // Import your global styles
import App from './App'; // Import the main App component

// Render the App component inside the root element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Links to the "root" div in public/index.html
);
