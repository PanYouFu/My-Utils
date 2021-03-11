import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import 'github-markdown-css'
import './index.less'
import './style.less'
import App from './App'
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  <HashRouter basename='/'>
    <App />
  </HashRouter>,
  document.getElementById('root'),
)