import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import App from './components/App';

if (window.location.pathname.split('/')[1] === 'pathfinder2-character-planner'){
  window.location.replace('http://pathfinder2-character-planner.github.io')
}

render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
)
