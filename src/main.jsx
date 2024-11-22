import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {QueryClientProvider,QueryClient} from '@tanstack/react-query'
import { Context } from './contextAPI/Context.jsx'
const queryClient=new QueryClient()
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <Context>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Context>
  </QueryClientProvider>
)
