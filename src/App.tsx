import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Main, PATH_ROOT } from 'pages/Main'

export default function App() {
  return (
    <Routes>
      <Route path={PATH_ROOT} element={<Main />} />
    </Routes>
  )
}
