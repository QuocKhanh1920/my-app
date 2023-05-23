import { useState } from 'react';

import './AddNewBlog.modules.scss';

import axios from 'axios';

function AddNewBlog(props) {
    const [title, setTitle] = useState('');

    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        setTitle('');
        setContent('');
        e.preventDefault();
        if (!title || !content) {
            alert('Empty');
            return;
        }
        console.log(content, title);

        let data = {
            name: title,
            body: content,
            userId: 1,
        };

        let res = await axios.post('https://jsonplaceholder.typicode.com/comments', data);

        if (res && res.data) {
            let newBlog = res.data;
            props.handleAddNew(newBlog);
            console.log(newBlog);
        }
        console.log(res);
    };

    return (
        <>
            <h2>Created New Blog</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-data">
                    <label htmlFor="title">Title: </label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="input-data">
                    <label htmlFor="content">Content: </label>
                    <input type="text" id="content" value={content} onChange={(e) => setContent(e.target.value)} />
                </div>
                <div className="button">
                    <button type="submit">Add</button>
                </div>
            </form>
        </>
    );
}

export default AddNewBlog;
