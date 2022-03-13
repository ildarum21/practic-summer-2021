import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { RootThemeProvider } from 'utils/styles'
import { BrowserRouter } from 'react-router-dom'
import { NoteContextProvider } from 'store/note-context'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NoteContextProvider>
        <RootThemeProvider>
          <App />
        </RootThemeProvider>
      </NoteContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
