import React from "react";
import CharacterCard from "./CharacterCard";
import './Charactercard.css'

function CharacterList( {characters, selectedHouse} ) {
    return (
        <div className="character-list">
      {characters.filter((character) => character.family === selectedHouse).map((character) => (<CharacterCard key={character.id} character={character} />))}
    </div>
    )
}

export default CharacterList;