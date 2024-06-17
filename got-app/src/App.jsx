import React from "react"
import { useEffect, useState } from "react"

const baseUrl = "http://localhost:3000"

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(baseUrl + "/characters")
      .then(resp => resp.json())
      .then(data => setCharacters(data))
      
  })

  return (
    <>
    </>
  )
}

export default App
