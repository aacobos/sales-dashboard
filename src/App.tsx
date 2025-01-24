// Importando os componentes necessários do React Router
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from 'react-router-dom'
import Cookies from 'js-cookie'
import { Home, Leads, Login, Profile, Registration } from './pages'

function App() {
  const ProtectedRoute = () => {
    const checkAuthCookie = Cookies.get('Authorization')

    if (!checkAuthCookie) {
      alert('Autenticação necessária')
      return <Navigate to="/" replace />
    }

    return <Outlet />
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Registration />} />
        <Route element={<ProtectedRoute />}></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/perfil" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App

// O trecho <Route element={<ProtectedRoute />}></Route> deve englobas os itens logo abaixo dele.
// Eu não o englobei pois está havendo algum erro de comunicação com a api e as informações
// não estão seno puxadas. O certo seria:
// <Route element={<ProtectedRoute />}>
// <Route path="/home" element={<Home />} />
// <Route path="/leads" element={<Leads />} />
// <Route path="/perfil" element={<Profile />} />
// </Route>
