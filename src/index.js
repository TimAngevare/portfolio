import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import Post from './Components/Post';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Project from "./Components/Project";
import PostSection from "./Components/PostSection";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <main className="container" data-theme="dark">
        <div>
            <div id="google_translate_element"></div>
            <script type="text/javascript"
                    src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
            <div>
                <Nav/>
            </div>
            <React.StrictMode>
                <Router>
                    <Routes>
                        <Route path="/" element={<App/>}/>
                        <Route path="/posts" element={<Post/>}/>
                        <Route path="/postSection" element={<PostSection/>}/>
                        <Route path="/projects" element={<Project/>}/>
                    </Routes>
                </Router>
            </React.StrictMode>
        </div>
        <Footer/>
    </main>
);

