import React from "react"
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Header from "./Header";
import CharacterPage from "./CharacterPage";
import CreateCharacter from "./CreateCharacter";
import Search from "./Search";
import Results from "./Results";

const baseUrl = "http://localhost:3000"

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(baseUrl + "/characters")
      .then(resp => resp.json())
      .then(data => setCharacters(data))   
  }, [])

  return (
     <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<CharacterPage characters={characters} />} />
          <Route path="/create" element={<CreateCharacter/>} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:searchTerm" element={<Results />} />
        </Routes>
      </div>
     </Router>
  )
}

export default App;
