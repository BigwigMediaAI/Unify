import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use BrowserRouter instead of Router
import './App.css';
import Landing from './pages/Landing';
import Team from './pages/Team';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Route for Team Page */}
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
};

export default App;
