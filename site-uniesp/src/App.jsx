import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/CustomNavbar'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Noticias from './pages/Noticias'
import Faculdade from './pages/Faculdade'
import DpoLgpd from './pages/DpoLgpd'
import Contato from './pages/Contato'

function App() {

  return (
    <>
      <BrowserRouter>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '100vh' 
        }}>
          <div>
            <NavBar />
          </div>
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/noticias" element={<Noticias />} />
              <Route path="/a-faculdade" element={<Faculdade />} />
              <Route path="/dpo-lgpd" element={<DpoLgpd />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
