import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import {RouterProvider} from "react-router-dom";
import AuthProvider from './Providers/AuthProvider';
import router from './Router/router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
      </React.StrictMode>
      </AuthProvider>
      </div>
)
