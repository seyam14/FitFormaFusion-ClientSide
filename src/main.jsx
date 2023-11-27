import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './AuthProvider/AuthProvider';
import { router } from './Routes/Routes';

import {
  QueryClient,
  QueryClientProvider
  // useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <div className='max-w-6xl mx-auto'>
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  </AuthProvider>
</React.StrictMode>,
)
