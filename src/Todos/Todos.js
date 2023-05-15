import { useState, useEffect } from 'react';

function Todos() {
    const [name, setName] = useState('Peter');

    const [address, setAddress] = useState('');

    const handleClick = () => {
        if (!address) {
            alert('Null!!!!');
        }

        const newTodo = {
            title: address,
        };

        setTodos([...todos, newTodo]);
        setAddress('');
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
                return <div key={index}>{todo.title}</div>;
            })}
            <input onChange={(e) => handleValueChange(e)} value={address} />

            <button onClick={handleClick}>Click</button>
        </div>
    );
}

export default Todos;
