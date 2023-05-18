import { useState } from 'react';
import './AddNewBlog.modules.scss';

function AddNewBlog() {
    const [title, setTitle] = useState('');

    const [content, setContent] = useState('');

    const handleSubmit = () => {
        setTitle('');
        setContent('');
        console.log(title, content);
    };

    return (
        <>
            <h2>Created New Blog</h2>
            <div className="form">
                <div className="input-data">
                    <label>Title: </label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="input-data">
                    <label>Content: </label>
                    <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
                </div>
                <button onClick={handleSubmit}>Add</button>
            </div>
        </>
    );
}

export default AddNewBlog;
