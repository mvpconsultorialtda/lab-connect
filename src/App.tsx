import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import LandingPage from './pages/LandingPage';
import VagasPage from './pages/VagasPage';
import MentoriaPage from './pages/MentoriaPage';
import EventosPage from './pages/EventosPage';
import SobrePage from './pages/SobrePage';
import LoginPage from './pages/LoginPage';
import CadastroPage from './pages/CadastroPage';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/vagas" element={<VagasPage />} />
          <Route path="/mentoria" element={<MentoriaPage />} />
          <Route path="/eventos" element={<EventosPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastro" element={<CadastroPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
