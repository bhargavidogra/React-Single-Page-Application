import React from 'react';
import {Link} from 'react-router-dom';

import './css/nav.css';

export const NavBar = ()=>(
    <nav>
        <ul  className="topnav" >
            <li className="active">
                <Link className="decor" to="/">Home</Link>
            </li>
            <li>
                <Link className="decor" to="/about">About</Link>
            </li>
            <li>
                <Link className="decor" to="/articals-list">Artical's Page</Link>
            </li>
        </ul>
    </nav>
)