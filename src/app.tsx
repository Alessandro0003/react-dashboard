import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home'
import { Metrics } from './pages/metrics'

export function App() {
  return (  
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard' element={ <Metrics /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
