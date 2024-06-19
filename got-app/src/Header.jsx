import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/create">Create Character</Link></li>
                    <li><Link to="/search">Search Characters</Link></li>
                </ul>
            </nav>
            <h1>Game of Thrones</h1>
        </header>
    );
}

export default Header;