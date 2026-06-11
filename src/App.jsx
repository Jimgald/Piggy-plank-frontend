import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import FeedPage from './pages/FeedPage';
import GroupsPage from './pages/GroupsPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        <main className="container mx-auto p-4 max-w-md">
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/home" element={<FeedPage />} /> 
            <Route path="/groups" element={<GroupsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;