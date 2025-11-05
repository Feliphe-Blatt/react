import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Inicio from './pages/Inicio'
import Noticias from './pages/Noticias'
import Faculdade from './pages/Faculdade'
import DpoLgpd from './pages/DpoLgpd'
import Contato from './pages/Contato'

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <div>
            <NavBar />
          </div>
          <div>
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/noticias" element={<Noticias />} />
              <Route path="/a-faculdade" element={<Faculdade />} />
              <Route path="/dpo-lgpd" element={<DpoLgpd />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
