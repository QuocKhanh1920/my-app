import { useParams, useNavigate } from 'react-router-dom';

import useFetch from '../useFetch';

import './BlogDetails.modules.scss';

function BlogDetails() {
    let { id } = useParams();

    let navigate = useNavigate();

    const {
        data: dataBlogDetails,
        isLoadings,
        isError,
    } = useFetch(`https://jsonplaceholder.typicode.com/comments/${id}`);

    const handleBackPage = () => {
        navigate('/blog');
    };

    return (
        <div className="container">
            ----<span onClick={handleBackPage}> Back </span>----
            {dataBlogDetails && (
                <>
                    <h3>Blog ID: {id}</h3>
                    {isLoadings ? (
                        'Loading data ...'
                    ) : (
                        <>
                            <h2>Welcome to blog of {dataBlogDetails.email}</h2>
                            <div className="blog-details">
                                <div className="blog-title">{dataBlogDetails.name}</div>
                                <div className="blog-content">{dataBlogDetails.body}</div>
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
}

export default BlogDetails;
