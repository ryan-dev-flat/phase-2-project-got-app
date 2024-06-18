import React from "react"
import { useEffect, useState } from "react"
import Header from "./Header";
import CharacterPage from "./CharacterPage";
import CreateCharacter from "./CreateCharacter";


const baseUrl = "http://localhost:3000"

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(baseUrl + "/characters")
      .then(resp => resp.json())
      .then(data => setCharacters(data))   
  }, [])

  return (
    <>
      <Header />
      <CharacterPage characters={characters} />
      <CreateCharacter />
    </>
  )
}

export default App
