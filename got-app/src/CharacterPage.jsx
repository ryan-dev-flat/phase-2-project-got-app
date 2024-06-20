import React, { useState } from "react";
import CharacterList from "./CharacterList";

function CharacterPage( {characters} ) {
    const [selectedHouse, setSelectedHouse] = useState('')

    const handleHouseClick = (family) => {
        setSelectedHouse(family)
    }

    return (
        <main>
            <div className="button-container">
                <button className="button-bar" onClick={() => handleHouseClick("House Stark")}>House Stark</button>
                <button className="button-bar" onClick={() => handleHouseClick("House Targaryen")}>House Targaryen</button>
                <button className="button-bar" onClick={() => handleHouseClick("House Baratheon")}>House Baratheon</button>
                <button className="button-bar" onClick={() => handleHouseClick("House Lannister")}>House Lannister</button>
                <button className="button-bar" onClick={() => handleHouseClick("House Greyjoy")}>House Greyjoy</button>
                <button className="button-bar" onClick={() => handleHouseClick("House Tyrell")}>House Tyrell</button>
                <button className="button-bar" onClick={() => handleHouseClick("House Bolton")}>House Bolton</button>
                <button className="button-bar" onClick={() => handleHouseClick("House Mormont")}>House Mormont</button>
                <button className="button-bar" onClick={() => handleHouseClick("Free Folk")}>Free Folk</button>
                <button className="button-bar" onClick={() => handleHouseClick("misc")}>Miscellaneous</button>
            </div>
            <CharacterList characters={characters} selectedHouse={selectedHouse} />
        </main>
    )
}
export default CharacterPage;