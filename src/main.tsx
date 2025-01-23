import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// pages 

import Home from './router/Home.tsx';
import Search from './components/Search.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
    {
      path: "/",
      element: <Search />, 
    }
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
