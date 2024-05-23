import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
);