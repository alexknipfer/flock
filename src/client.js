import BrowserRouter from 'react-router-dom/BrowserRouter'
import Home from './components/Home/Home'
import Layout from './components/Layout/Layout'
import React from 'react'
import { render } from 'react-dom'

render(
  <BrowserRouter>
    <Layout>
      <Home />
    </Layout>
  </BrowserRouter>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
