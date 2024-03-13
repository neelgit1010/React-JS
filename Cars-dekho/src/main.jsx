import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Pages
import Home from './Pages/Home.jsx'
import Contact from './Pages/Contact.jsx'
import About from './Pages/About.jsx'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Router,
} from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    //Main Route
    <Route path='/' element={<App />}>
        //Sub routes
      <Route index element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="contact" element={<Contact />}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
