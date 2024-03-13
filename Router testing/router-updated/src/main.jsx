import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Pages
import Home from '../../router-outdated/src/pages/Home.jsx'
import About from '../../router-outdated/src/pages/About.jsx'
import Contact from '../../router-outdated/src/pages/Contact.jsx'

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
      <Route path='/' element={<App/>}>
        //Sub routes
        <Route index element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="contact" element={<Contact/>}></Route>
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
