import {ReactComponent as Linkedin} from "../resources/linkedin-outline-svgrepo-com.svg";
import {ReactComponent as Instagram} from "../resources/instagram-outline-svgrepo-com.svg";
import {ReactComponent as Github} from "../resources/github-outline-svgrepo-com.svg";
import {ReactComponent as CV} from "../resources/document-text-svgrepo-com.svg";
import CVFile from "../resources/cv.pdf"

export default function Contact (props) {
    const styles = { content : {
        maxWidth : props.contentWidth,
        height : "auto",
    }, col : {
        display: "flex",
            flexWrap: "wrap",
            paddingBottom: "5%",
            maxWidth: props.colWidth

        }}

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch(CVFile).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'cv.pdf';
                alink.click();
            })
        })
    }

    return(
        <div className="grid" style={styles.col}>
            <Linkedin style={styles.content}/>
            <Instagram style={styles.content}/>
            <Github style={styles.content}/>
            <CV onClick={onButtonClick} style={styles.content}/>
        </div>
    );
}