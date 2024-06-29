import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <h1>
                <Link to='/bookmarks'>Bookmarks</Link>
            </h1>
            <ul>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='bookmarks/new'>Add Bookmark</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar