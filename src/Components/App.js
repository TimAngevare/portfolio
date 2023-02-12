import '../App.css';
import Nav from "./Nav";
import '@picocss/pico'
import Intro from "./Intro";
import Contact from "./Contact";
import Picture from "./Picture";
import ProjectSection from "./ProjectSection";
import PostSection from "./PostSection";
import Footer from "./Footer";

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
            <div>
                <Contact contentWidth="13%" colWidth="50%"/>
            </div>
            <div >
                <Picture genRandomInt={genRandomInt}/>
            </div>
            <div className="padding-t">
                <ProjectSection/>
            </div>
            <section className="padding-t">
                <PostSection/>
            </section>
            <Footer/>
        </div>
    </main>
  );
}

export default App;
