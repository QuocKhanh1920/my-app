import useFetch from '../Customize/useFetch';

import { Link } from 'react-router-dom';

import './Blog.scss';

function Blog() {
    const { data: dataBlog, isLoadings, isError } = useFetch('https://jsonplaceholder.typicode.com/comments');

    let newData = [];

    if (dataBlog && dataBlog.length > 0) {
        newData = dataBlog.slice(0, 10);
    }

    return (
        <div>
            <h3>Welcome to my Blog</h3>
            <div className="content">
                {isLoadings === false &&
                    newData &&
                    newData.length > 0 &&
                    newData.map((item) => {
                        return (
                            <div className="box" key={item.id}>
                                <div className="name">Name: {item.name}</div>
                                <div className="comment">Comment: {item.body}</div>
                                <div className="button">
                                    <Link to={`/blog/${item.id}`} className="view">
                                        <p>View Details</p>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}

                {isLoadings === true && <div>Loading data ...</div>}
            </div>
        </div>
    );
}

export default Blog;
