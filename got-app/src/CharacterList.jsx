import React from "react";
import CharacterCard from "./CharacterCard";

function CharacterList( {characters, selectedHouse} ) {
    return (
        <ul>
      {characters.filter((character) => character.family === selectedHouse).map((character) => (<CharacterCard key={character.id} character={character} />))}
    </ul>
    )
}

export default CharacterList;