import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage'; 

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        <main className="container mx-auto p-4 max-w-md">
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/home" element={<h1 className="text-2xl font-bold text-center mt-10">Home (Feed Social)</h1>} />
            <Route path="/groups" element={<h1 className="text-2xl font-bold text-center mt-10">Mis Grupos y Buscar</h1>} />
            <Route path="/profile" element={<h1 className="text-2xl font-bold text-center mt-10">Perfil y Logros</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;