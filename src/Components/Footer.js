import Contact from "./Contact";

export default function Footer () {
    return(
      <footer>
          <div className="grid">
              <h5><u>@ Tim Angevare</u></h5>
              <Contact contentWidth="12%" colWidth="40%"/>
          </div>
      </footer>
    );
}