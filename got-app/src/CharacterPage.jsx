import React, { useState } from "react";
import CharacterList from "./CharacterList";
import './Button.css'

function CharacterPage( {characters} ) {
    const [selectedHouse, setSelectedHouse] = useState('')

    const handleHouseClick = (family) => {
        setSelectedHouse(family)
    }

    return (
        <main>
            <div className="button-container">
                <button className="button stark" onClick={() => handleHouseClick("House Stark")}>House Stark</button>
                <button className="button targaryen" onClick={() => handleHouseClick("House Targaryen")}>House Targaryen</button>
                <button className="button baratheon" onClick={() => handleHouseClick("House Baratheon")}>House Baratheon</button>
                <button className="button lannister" onClick={() => handleHouseClick("House Lannister")}>House Lannister</button>
                <button className="button greyjoy" onClick={() => handleHouseClick("House Greyjoy")}>House Greyjoy</button>
                <button className="button tyrell" onClick={() => handleHouseClick("House Tyrell")}>House Tyrell</button>
                <button className="button bolton" onClick={() => handleHouseClick("House Bolton")}>House Bolton</button>
                <button className="button mormont" onClick={() => handleHouseClick("House Mormont")}>House Mormont</button>
                <button className="button free-folk" onClick={() => handleHouseClick("Free Folk")}>Free Folk</button>
                <button className="button misc" onClick={() => handleHouseClick("misc")}>Miscellaneous</button>
            </div>
            <CharacterList characters={characters} selectedHouse={selectedHouse} />
        </main>
    )
}
export default CharacterPage;