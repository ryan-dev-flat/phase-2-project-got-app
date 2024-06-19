import React from "react";

function CharacterCard ( {character} ){
    return (
        <li>
            <img src={character.imageUrl} />
            <h4>{character.fullName}</h4>
            <p>{character.bio}</p>
        </li>
    );
}

export default CharacterCard;