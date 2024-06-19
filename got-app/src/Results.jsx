// Results uses dynamic routing and fetches based on unique id
//uses map function to return character card display

import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';

function Results({ searchTerm }) {
  // State variables to hold initial stateduring the first render--and hold the current state-- the search results and characters data using array destructuring and update state to new value and trigger a re-render
  const [results, setResults] = useState([]);
  const [characters, setCharacters] = useState([]);

  // Fetch characters data when this component loads
  useEffect(() => {
    fetch('http://localhost:3000/characters')
      .then(response => response.json())
      .then(data => setCharacters(data));
  }, []);

  // Update results whenever searchTerm or characters data changes using filter
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
    <div>
      {/* Display each character in the results */}
      {results.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default Results;

