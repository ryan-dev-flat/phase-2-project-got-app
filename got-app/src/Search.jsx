import React, { useState } from 'react';
import Results from './Results';

function Search() { 
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <Results searchTerm={searchTerm} />
    </div>
  );
}

export default Search;