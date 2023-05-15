import { Link } from 'react-router-dom';

import './Navigation.scss';

function Navigation() {
    return (
        <ul>
            <li>
                <Link className="active" to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/todos">Todos</Link>
            </li>
            <li>
                <Link to="/countdown">Countdown</Link>
            </li>
        </ul>
    );
}

export default Navigation;
