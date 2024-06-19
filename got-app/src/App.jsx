// Import dependencies
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import CharacterPage from './CharacterPage';
import CreateCharacter from './CreateCharacter';
import Search from './Search';
import Results from './Results';

// Base URL for the API
const baseUrl = 'http://localhost:3000';

// Main App component
function App() {
  // State for storing characters data
  const [characters, setCharacters] = useState([]);

  // Fetch characters data when the component mounts
  useEffect(() => {
    fetch(baseUrl + '/characters')
      .then(resp => resp.json())
      .then(data => setCharacters(data));
  }, []);

  // Render the app
  return (
    // Wrap everything inside BrowserRouter (imported as Router)
    <Router>
      <div>
        {/* Header component */}
        <Header />
        {/* Define routes */}
        <Routes>
          {/* Home route */}
          <Route path="/" element={<CharacterPage characters={characters} />} />
          {/* Create character route */}
          <Route path="/create" element={<CreateCharacter />} />
          {/* Search route */}
          <Route path="/search" element={<Search />} />
          {/* Search results route */}
          <Route path="/search/:searchTerm" element={<Results />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
