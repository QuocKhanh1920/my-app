import { useNavigate } from 'react-router-dom';

import './NotFound.modules.scss';

function NotFound() {
    let navigate = useNavigate();

    const handleReturn = () => {
        navigate('/');
    };

    return (
        <>
            <div className="not-found">404 Not Found</div>
            <button className="return btn btn-danger" onClick={handleReturn}>
                Return to Home Page
            </button>
        </>
    );
}

export default NotFound;
