import '../App.css';
import Nav from "./Nav";
import '@picocss/pico'
import Intro from "./Intro";
import Contact from "./Contact";
import Picture from "./Picture";

function App() {
    const genRandomInt = (list) => {
        return Math.floor(Math.random() * (list.length - 1)) ;
    };

  return (
    <main className="container">
        <div data-theme="dark">
            <Nav/>
            <Intro genRandomInt={genRandomInt}/>
            <Contact/>
            <Picture genRandomInt={genRandomInt}/>
        </div>
    </main>
  );
}

export default App;
