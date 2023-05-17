import { useParams } from 'react-router-dom';

function BlogDetails() {
    let { id } = useParams();
    return <h2>Welcome to blog no {id}</h2>;
}

export default BlogDetails;
