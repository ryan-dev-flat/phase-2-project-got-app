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
            </div>
            <div>
            <h2>Welcome to the Game of Thrones Wiki</h2>
            <p>The series focuses on several noble houses of Westeros and a complicated, multiparty war for the Iron Throne that features shifting conflicts, alliances, and betrayals. Key houses include the Starks, who rule in the North; the Lannisters, a wealthy family from the West who have married into the royal line; the Baratheons, who at the outset hold the Iron Throne; and the Targaryens, who once controlled the Iron Throne using dragons but who have been nearly wiped out by the time the story begins. This war develops after the death of King Robert Baratheon and the resulting feud between his friend and ally Lord Eddard Stark and Roberts widow, Queen Cersei Lannister, and her children. The conflict draws in two of the Stark children, Robb and Sansa, while the younger children Arya and Bran find themselves on their own terrifying adventures. Jon Snow, raised as a bastard member of the Stark family, serves in the Nights Watch, a military organization that defends the Seven Kingdoms from forces beyond the Wall. Cerseis brothers Jaime and Tyrion also play key roles. Exiled on the continent of Essos, Daenerys Targaryen seeks to return to Westeros with dragons and an army in order to reclaim the Iron Throne for House Targaryen.</p>
            </div>
            <CharacterList characters={characters} selectedHouse={selectedHouse} />
        </main>
    )
}
export default CharacterPage;