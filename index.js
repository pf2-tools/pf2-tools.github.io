import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import App from './components/App';

const REPO = 'pf2-tools'

if (window.location.pathname.split('/')[1] === REPO){
  window.location.replace(`http://${REPO}.github.io`)
}

render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
)
