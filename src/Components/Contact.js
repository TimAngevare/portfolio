import {ReactComponent as Linkedin} from "../resources/linkedin-outline-svgrepo-com.svg";
import {ReactComponent as Instagram} from "../resources/instagram-outline-svgrepo-com.svg";
import {ReactComponent as Github} from "../resources/github-outline-svgrepo-com.svg";
import {ReactComponent as CV} from "../resources/document-text-svgrepo-com.svg";

export default function Contact () {
    const styles = { content : {
        width : "5%",
        height : "auto",
        fill : "#fff",
        stroke : "black"
    }, col : {
        display: "flex",
            flexWrap: "wrap",
            paddingBottom: "5%"
        }}
    return(
        <div className="grid" style={styles.col}>
            <Linkedin style={styles.content}/>
            <Instagram style={styles.content}/>
            <Github style={styles.content}/>
            <CV style={styles.content}/>
        </div>
    );
}