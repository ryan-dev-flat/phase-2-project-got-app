import React, { useState } from "react";
import './Form.css'

const initialCharcterInfo = {
    fullName: "",
    title: "",
    family: "House Stark",
    imageUrl: "",
    bio: "",
}

function CreateCharacter ({ addCharacter }) {
    const [characterInfo, setCharacterInfo] = useState(initialCharcterInfo)

    function handleSubmit(e) {
        e.preventDefault()

        addCharacter(characterInfo)
        setCharacterInfo(initialCharcterInfo)
}

    function handleChange(e) {
        const key = e.target.name
        const newCharacterInfo = {
            ...characterInfo,
            [key]: e.target.value
        }
        setCharacterInfo(newCharacterInfo)
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input type="text" name="fullName" placeholder="Enter Full Name" value={characterInfo.fullName} onChange={handleChange}/>
                <input type="text" name="title" placeholder="Enter Title" value={characterInfo.title} onChange={handleChange}/>
                <select name="family" value={characterInfo.family} onChange={handleChange}>
                    <option value="House Stark">House Stark</option>
                    <option value="House Lannister">House Lannister</option>
                    <option value="House Baratheon">House Baratheon</option>
                    <option value="House Greyjoy">House Greyjoy</option>
                    <option value="House Tyrell">House Tyrell</option>
                    <option value="House Bolton">House Bolton</option>
                    <option value="Free Folk">Free Folk</option>
                    <option value="House Targaryen">House Targaryen</option>
                    <option value="House Mormont">House Mormont</option>
                    <option value="misc">misc</option>
                </select>
                <input type="text" name="imageUrl" placeholder="Enter Image URL" value={characterInfo.imageUrl} onChange={handleChange}/>
                <input type="text" name="bio" placeholder="Enter Bio" value={characterInfo.bio} onChange={handleChange}/>
                <button type="submit" className="character-submit">Create Character</button>
            </form>
        </div>
    )
}

export default CreateCharacter;