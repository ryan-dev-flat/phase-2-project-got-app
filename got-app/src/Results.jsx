import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import './Results.css';

function Results({ searchTerm }) {
  const [results, setResults] = useState([]);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/characters')
      .then(response => response.json())
      .then(data => setCharacters(data));
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filteredCharacters = characters.filter(character =>
        character.fullName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filteredCharacters);
    } else {
      setResults([]);
    }
  }, [searchTerm, characters]);

  return (
    <div className="results-container">
      {results.map(character => (
        <div className="result-card">
        <CharacterCard key={character.id} character={character} />
        </div>
      ))}
    </div>
  );
}

export default Results;
