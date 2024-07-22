import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Counter from './Counter'
import Counter_3 from './Counter3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const counter = ReactDOM.createRoot(document.getElementById('counter-div'));
counter.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
);

const counter3 = ReactDOM.createRoot(document.getElementById('counter-div2'));
counter3.render(
  <React.StrictMode>
    <Counter_3 />
  </React.StrictMode>
);
