import React, { useState } from "react";
import CharacterList from "./CharacterList";

function CharacterPage( {characters} ) {
    const [selectedHouse, setSelectedHouse] = useState('')

    const handleHouseClick = (family) => {
        setSelectedHouse(family)
    }

    return (
        <main>
            <div>
                <button onClick={() => handleHouseClick("House Stark")}>House Stark</button>
                <button onClick={() => handleHouseClick("House Targaryen")}>House Targaryen</button>
                <button onClick={() => handleHouseClick("House Baratheon")}>House Baratheon</button>
                <button onClick={() => handleHouseClick("House Lannister")}>House Lannister</button>
                <button onClick={() => handleHouseClick("House Greyjoy")}>House Greyjoy</button>
                <button onClick={() => handleHouseClick("House Tyrell")}>House Tyrell</button>
                <button onClick={() => handleHouseClick("House Bolton")}>House Bolton</button>
                <button onClick={() => handleHouseClick("Free Folk")}>Free Folk</button>
                <button onClick={() => handleHouseClick("misc")}>Miscellaneous</button>
                <button onClick={() => handleHouseClick()}>Create Character!</button>
            </div>
            <CharacterList characters={characters} selectedHouse={selectedHouse} />
        </main>
    )
}
export default CharacterPage;