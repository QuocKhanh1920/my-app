import { useState } from 'react';
import './AddNewBlog.modules.scss';

function AddNewBlog() {
    const [title, setTitle] = useState('');

    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        setTitle('');
        setContent('');
        e.preventDefault();
        if (!title || !content) {
            alert('Empty');
        }
        console.log(content, title);
    };

    return (
        <>
            <h2>Created New Blog</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-data">
                    <label>Title: </label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="input-data">
                    <label>Content: </label>
                    <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
                </div>
                <button type="submit">Add</button>
            </form>
        </>
    );
}

export default AddNewBlog;
