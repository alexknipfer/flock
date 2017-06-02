import BrowserRouter from 'react-router-dom/BrowserRouter'
import Home from './components/Home/Home'
import React from 'react'
import { render } from 'react-dom'

render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
