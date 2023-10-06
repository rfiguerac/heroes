import React from 'react'
import { getRoutes } from './routers/Router';
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom';
import 'animate.css';
const router = getRoutes();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={ router } />
  </React.StrictMode>,
)
