//  Search Component -- Creates the search field 
// searchTerm setSearchterm to manage state
import React, { useState } from 'react';
import Results from './Results';

function Search() {
  // State to hold the search term  
  const [searchTerm, setSearchTerm] = useState('');

  // Update searchTerm state whenever the input changes
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
      {/* Pass searchTerm state to Results component */}
      <Results searchTerm={searchTerm} />
    </div>
  );
}

export default Search;
