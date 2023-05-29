import logo from './logo.svg';

import './App.scss';

import Todos from './Todos';

import DataBoard from './DataBoard';

import Navigation from './Navigation';

import Blog from './Blog';

import BlogDetails from './BlogDetails';

import AddNewBlog from './AddNewBlog';

import Search from './Search';

import NotFound from './NotFound';

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
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<BlogDetails />} />
                    <Route path="/add-new-blog" element={<AddNewBlog />} />
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
                    <Route path="/search" element={<Search />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </header>
        </div>
    );
}

export default App;
