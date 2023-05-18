import { useParams, useNavigate } from 'react-router-dom';

import './BlogDetails.scss';

function BlogDetails() {
    let { id } = useParams();

    let navigate = useNavigate();

    const handleBackPage = () => {
        navigate('/blog');
    };

    return (
        <div className="header">
            <span onClick={handleBackPage}>---- Back ----</span>
            <h2>Welcome to blog no {id}</h2>
        </div>
    );
}

export default BlogDetails;
