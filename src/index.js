import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import Post from './Components/Post';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <main className="container">
        <div data-theme="dark">
            <div>
                <Nav/>
            </div>
            <React.StrictMode>
                <Router>
                    <Routes>
                        <Route path="/" element={<App/>}/>
                        <Route path="/posts" element={<Post/>}/>
                    </Routes>
                </Router>
            </React.StrictMode>
        </div>
        <Footer/>
    </main>
);

