import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contacts from './Components/Contacts/Contacts'
import Portfolio from './Components/Portfolio/Portfolio'
import PageNotFound from './Components/PageNotFound/PageNotFound'

export default function App() {

  let router = createBrowserRouter([
    {
      path:'',element:<Layout />, children : [
        {index : true , element : <Home />},
        {path : 'about' , element : <About />},
        {path : 'portfolio' , element : <Portfolio />},
        {path : 'contacts' , element : <Contacts />},
      ]
    },
    {path : '*' , element : <PageNotFound />}
  ])

  return <RouterProvider router={router}></RouterProvider>
}
