import { useState } from 'react';

import './Todos.modules.scss';

function Todos() {
    const [job, setJob] = useState([]);

    const [jobs, setJobs] = useState(() => {
        const storrageJobs = JSON.parse(localStorage.getItem('jobs'));

        console.log(storrageJobs);

        return storrageJobs ?? [];
    });

    const [editInput, setEditInput] = useState(false);

    const handleJobs = () => {
        setJobs((prev) => {
            const newJobs = [...prev, job];

            const jsonJobs = JSON.stringify(newJobs);

            localStorage.setItem('jobs', jsonJobs);

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
        const newList = jobs.filter((_, i) => i !== index);

        localStorage.setItem('jobs', JSON.stringify(newList));

        setJobs(newList);
    };

    return (
        <div className="todolist-container">
            <div className="add-todolist">
                <input value={job} onChange={(e) => setJob(e.target.value)} />

                <button className="btn btn-primary" onClick={handleJobs}>
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
