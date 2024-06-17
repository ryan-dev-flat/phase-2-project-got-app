import React from "react";

function CharacterCard ( {character} ){
    return (
        <li>
            <img src={character.imageUrl} />
            <h4>{character.fullName}</h4>
        </li>
    );
}

export default CharacterCard;