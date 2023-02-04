import '../App.css';
import Nav from "./Nav";
import '@picocss/pico'
import Intro from "./Intro";
import Contact from "./Contact";

function App() {
  return (
    <main className="container">
        <div data-theme="dark">
            <Nav/>
            <Intro/>
            <Contact/>
        </div>
    </main>
  );
}

export default App;
