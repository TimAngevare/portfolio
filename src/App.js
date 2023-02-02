import './App.css';
import Nav from "./Nav";
import '@picocss/pico'
import Intro from "./Intro";

function App() {
  return (
    <main className="container">
        <div data-theme="dark">
            <Nav/>
            <Intro/>
        </div>
    </main>
  );
}

export default App;
