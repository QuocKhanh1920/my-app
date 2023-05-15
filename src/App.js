import logo from './logo.svg';

import './App.css';

import Todos from './Todos';

import DataBoard from './DataBoard';

import Navigation from './Navigation';

import { Countdown, NewCountDown } from './Countdown';

import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navigation />
                <img src={logo} className="App-logo" alt="logo" />
                <Routes>
                    <Route path="/" element={<DataBoard />} />
                    <Route path="/todos" element={<Todos />} />
                    <Route
                        path="/countdown"
                        element={
                            <div>
                                <Countdown />
                                <span>------------------------------</span>
                                <NewCountDown />
                            </div>
                        }
                    ></Route>
                </Routes>
            </header>
        </div>
    );
}

export default App;
