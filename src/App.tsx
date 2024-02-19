import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './pages/main/main'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/main' element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
