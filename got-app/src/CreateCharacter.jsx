import React, { useState } from "react";
import './Form.css'

const initialCharcterInfo = {
    fullName: "",
    title: "",
    family: "",
    image: "",
    bio: "",
}

function CreateCharacter () {
    const [characterInfo, setCharacterInfo] = useState({initialCharcterInfo})

    function handleChange(e) {
        const key = e.target.name
        const newCharacterInfo = {
            ...characterInfo,
            [key]: e.target.value
        }
        setCharacterInfo(newCharacterInfo)
    }

    function handleSubmit(e) {
        e.preventDefault()


    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input type="text" name="fullName" placeholder="Enter Full Name" value={characterInfo.fullName} onChange={handleChange}/>
                <input type="text" name="title" placeholder="Enter Title" value={characterInfo.title} onChange={handleChange}/>
                <select name="family" value={characterInfo.family} onChange={handleChange}>
                    <option>House Stark</option>
                    <option>House Lannister</option>
                    <option>House Baratheon</option>
                    <option>House Greyjoy</option>
                    <option>House Tyrell</option>
                    <option>House Bolton</option>
                    <option>Free Folk</option>
                    <option>House Targaryen</option>
                    <option>House Mormont</option>
                    <option>Miscellaneous</option>
                </select>
                <input type="text" name="image" placeholder="Enter Image URL" value={characterInfo.image} onChange={handleChange}/>
                <input type="text" name="bio" placeholder="Enter Bio" value={characterInfo.bio} onChange={handleChange}/>
                <button type="submit" className="character-submit">Create Character</button>
            </form>
        </div>
    )
}

export default CreateCharacter;