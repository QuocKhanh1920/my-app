import { useState, useEffect } from 'react';

function Todos() {
    const [name, setName] = useState('Peter');

    const [address, setAddress] = useState('');

    const handleAdd = () => {
        if (!address) {
            alert('Null!!!!');
        }

        const newTodo = {
            title: address,
        };

        setTodos([...todos, newTodo]);
        setAddress('');
    };

    const handleDelete = (index) => {
        setTodos((prev) => {
            const remainJobs = prev.filter((item, items) => items !== index);

            return remainJobs;
        });
    };

    const [todos, setTodos] = useState([
        {
            title: 'ReactJs',
        },
        {
            title: 'React Native',
        },
        {
            title: 'NodeJs',
        },
    ]);

    useEffect(() => {
        setName(address);
        console.log('React Native');
    }, [address]);

    const handleValueChange = (e) => {
        setAddress(e.target.value);
    };
    return (
        <div className="todos">
            <h1>Code ReactJs with {name}</h1>
            {todos.map((todo, index) => {
                return (
                    <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                        {todo.title}
                        <div style={{ marginLeft: 10 }} onClick={() => handleDelete(index)}>
                            x
                        </div>
                    </div>
                );
            })}
            <input onChange={(e) => handleValueChange(e)} value={address} />

            <button onClick={handleAdd}>Click</button>
        </div>
    );
}

export default Todos;
