import React from 'react'
import ReactDOM from 'react-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import App from './App'

import './index.css'

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Inter', 'arial', 'sans-serif'].join(','),
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
