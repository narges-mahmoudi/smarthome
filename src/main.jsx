import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login'
import Landing from './pages/Landing/index.jsx';
import Pages from './pages/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/" >
          <Route path="login" element={<Login />} />
          <Route path='pages/*' element={<Pages />}>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode >
)
