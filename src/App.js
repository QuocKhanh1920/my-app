import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navigation from './Navigation/Navigation';
import Todos from './Todos/Todos';

function App() {
    const [name, setName] = useState('Peter')

    const [address, setAddress] = useState('')

    const [todos, setTodos] = useState([
        {
            title: 'ReactJs'
        },
        {
            title: 'React Native'
        },
        {
            title: 'NodeJs'
        }
    ])

    const handleClick = () => {
        if (!address) {
            alert('Null!!!!')
        }

        const newTodo = {
            title: address
        }

        setTodos([...todos, newTodo])
        setAddress('')
    }

    const handleValueChange = (e) => {
        setAddress(e.target.value)
    }

    return (
        <div className="App">
            <Navigation />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>
                    Code ReactJs with {name}
                </h1>
                
                <Todos
                    todos={todos}
                />

                <input onChange={(e) => handleValueChange(e)} value={address} />
                <br />
                <button onClick={handleClick}>Click</button>
            </header>
        </div>
    );
}

export default App;
