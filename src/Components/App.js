import '../App.css';
import Nav from "./Nav";
import '@picocss/pico'
import Intro from "./Intro";
import Contact from "./Contact";
import Picture from "./Picture";
import ProjectSection from "./ProjectSection";

function App() {
    const genRandomInt = (list) => {
        return Math.floor(Math.random() * (list.length - 1)) ;
    };

  return (
    <main className="container">
        <div data-theme="dark">
            <div>
                <Nav/>
            </div>
            <div className="padding-t">
                <Intro genRandomInt={genRandomInt}/>
            </div>
            <div className="padding-t">
                <Contact/>
            </div>
            <div >
                <Picture genRandomInt={genRandomInt}/>
            </div>
            <div className="padding-t">
                <ProjectSection/>
            </div>
        </div>
    </main>
  );
}

export default App;
