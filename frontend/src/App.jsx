import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import SchoolDetails from './pages/SchoolDetails';
import StatusCheck from './pages/StatusCheck';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/school" element={<SchoolDetails />} />
          <Route path="/status" element={<StatusCheck />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
