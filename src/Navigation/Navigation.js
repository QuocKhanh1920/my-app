import { NavLink } from 'react-router-dom';

import './Navigation.modules.scss';

function Navigation() {
    return (
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/todos">Todos</NavLink>
            </li>
            <li>
                <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
                <NavLink to="/countdown">Countdown</NavLink>
            </li>
            <li>
                <NavLink to="/search">Search</NavLink>
            </li>
        </ul>
    );
}

export default Navigation;
