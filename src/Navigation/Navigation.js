import { NavLink } from 'react-router-dom';

import './Navigation.scss';

function Navigation() {
    const activeTab = () => {
        const active = document.getElementsByClassName('active').children;
        console.log(active);
    };

    return (
        <ul>
            <li onClick={activeTab}>
                <NavLink to="/">Home</NavLink>
            </li>
            <li onClick={activeTab}>
                <NavLink to="/todos">Todos</NavLink>
            </li>
            <li onClick={activeTab}>
                <NavLink to="/countdown">Countdown</NavLink>
            </li>
        </ul>
    );
}

export default Navigation;
