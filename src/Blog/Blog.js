import useFetch from '../useFetch';

import { Link } from 'react-router-dom';

// import Modals from '../Modals';

import { useEffect, useState } from 'react';

import './Blog.modules.scss';

import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';

import AddNewBlog from '../AddNewBlog/AddNewBlog';

function Blog() {
    const [show, setShow] = useState(false);

    const [newData, setNewData] = useState([]);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const { data: dataBlog, isLoadings } = useFetch('https://jsonplaceholder.typicode.com/comments');

    useEffect(() => {
        if (dataBlog && dataBlog.length > 0) {
            let data = dataBlog.slice(0, 10);
            setNewData(data);
        }
    }, [dataBlog]);

    const handleAddNew = (blog) => {
        let data = newData;
        data.unshift(blog);
        setShow(false);
        setNewData(data);
    };

    const handleDelete = (id) => {
        let data = newData;
        data = data.filter((item) => item.id !== id);
        setNewData(data);
    };

    return (
        <>
            <>
                <Button className="m-4" variant="primary" onClick={handleShow}>
                    + Add new blog
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddNewBlog handleAddNew={handleAddNew} />
                    </Modal.Body>
                </Modal>
            </>

            <div>
                <h3>Welcome to my Blog</h3>
                <br />
                <div className="blog-content">
                    {isLoadings === false &&
                        newData &&
                        newData.length > 0 &&
                        newData.map((item) => {
                            return (
                                <div className="box" key={item.id}>
                                    <span onClick={() => handleDelete(item.id)}> X </span>
                                    <div className="title">Title: {item.name}</div>
                                    <div className="content">Content: {item.body}</div>
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
        </>
    );
}

export default Blog;
