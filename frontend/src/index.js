import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css'; // Ensure this points to a valid CSS file
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
// If using reportWebVitals from create-react-app
reportWebVitals();
