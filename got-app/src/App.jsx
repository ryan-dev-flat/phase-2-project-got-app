import React from "react"
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Header from "./Header";
import CharacterPage from "./CharacterPage";
import CreateCharacter from "./CreateCharacter";
import Search from "./Search";
import Results from "./Results";
import './App.css'

const API = "http://localhost:3000/characters"

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(resp => resp.json())
      .then(data => setCharacters(data))   
  }, [])

  function addCharacter(character) {
    fetch(API, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json', 
      },
      body: JSON.stringify(character)
  })
  .then(response => response.json())
  .then(json => setCharacters([...characters, json]))
  
  }

  return (
     <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<CharacterPage characters={characters} />} />
          <Route path="/create" element={<CreateCharacter addCharacter={addCharacter} />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:searchTerm" element={<Results />} />
        </Routes>
      </div>
     </Router>
  )
}

export default App;
