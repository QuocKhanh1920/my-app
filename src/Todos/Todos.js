import { useState } from 'react';

import './Todos.modules.scss';

function Todos() {
    const [job, setJob] = useState('');

    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem('jobs'));

        console.log(storageJobs);

        return storageJobs ?? [];
    });

    const [editInput, setEditInput] = useState(false);

    const handleAdd = () => {
        setJobs((prev) => {
            const newJobs = [...prev, job];

            localStorage.setItem('jobs', JSON.stringify(newJobs));

            return newJobs;
        });
        setJob('');
    };

    const handleEdit = (index, newEdit) => {
        const newList = jobs.map((item, i) => (i === index ? newEdit : item));

        localStorage.setItem('jobs', JSON.stringify(newList));

        setJobs(newList);
    };

    const handleCancelEdit = () => {
        setEditInput(!editInput);
    };

    const handleDelete = (index) => {
        setJobs((prev) => {
            const remainJobs = prev.filter((item, items) => items !== index);

            localStorage.setItem('job', JSON.stringify(remainJobs));

            return remainJobs;
        });
    };

    return (
        <div className="todolist-container">
            <div className="add-todolist">
                <input value={job} onChange={(e) => setJob(e.target.value)} />

                <button className="btn btn-primary" onClick={handleAdd}>
                    Add
                </button>
            </div>

            <ul>
                {jobs.map((job, index) => (
                    <div className="update-content" key={index}>
                        {editInput ? (
                            <div className="edit-content" key={index}>
                                <input
                                    type="text"
                                    defaultValue={job}
                                    onChange={(e) => handleEdit(index, e.target.value)}
                                />
                                <button className="btn btn-success" onClick={() => setEditInput(null)}>
                                    Save
                                </button>

                                <button className="btn btn-secondary" onClick={handleCancelEdit}>
                                    Cancel
                                </button>
                            </div>
                        ) : (
                            <div className="non-edit-content" key={index}>
                                <li key={index}>
                                    {job}
                                    <button className="btn btn-danger" onClick={() => handleDelete(index)}>
                                        Delete
                                    </button>

                                    <button className="btn btn-info" onClick={() => setEditInput(true)}>
                                        Edit
                                    </button>
                                </li>
                            </div>
                        )}
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default Todos;
