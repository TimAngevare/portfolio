import '../App.css';
import '@picocss/pico'
import Intro from "./Intro";
import Contact from "./Contact";
import Picture from "./Picture";
import ProjectSection from "./ProjectSection";
import PostSection from "./PostSection";

function App() {
    const genRandomInt = (list) => {
        return Math.floor(Math.random() * (list.length - 1)) ;
    };

  return (
      <div>
          <div className="padding-t">
              <Intro genRandomInt={genRandomInt}/>
          </div>
          <div>
              <Contact contentWidth="13%" colWidth="50%"/>
          </div>
          <div>
              <Picture genRandomInt={genRandomInt}/>
          </div>
          <div className="padding-t">
              <ProjectSection/>
          </div>
          <section className="padding-t">
              <PostSection limit={5}/>
              <a href="/postSection">See all</a>
          </section>
      </div>
  );
}

export default App;
