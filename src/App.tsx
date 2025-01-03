// Importando os componentes necessários do React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="/cadastro" element={<>Cadastro</>} />
        <Route path="/login" element={<>Login</>} />
        <Route path="/leads" element={<>Leads</>} />
        <Route path="/perfil" element={<>Perfil</>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
