import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HomePage } from './pages/home'
import { Metrics } from './pages/metrics'

const queryClient = new QueryClient() 

export function App() {
  return (  
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/dashboard' element={<Metrics />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  )
}