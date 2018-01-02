import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';

const App = () => (
  <div id={ 'container' }>
    <h1>React Starter App</h1>
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
