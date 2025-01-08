import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DiscoverPage from './pages/DiscoverPage';
import CommunityPage from './pages/CommunityPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DiscoverPage />} />
        <Route path="/community/:id" element={<CommunityPage />} />
      </Routes>
    </Router>
  );
}

export default App;