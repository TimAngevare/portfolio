
export default function Project(props) {
    return(
        <div>
            <details>
                <summary>{props.title}</summary>
                <p>{props.summary}</p>
                <a href={props.link}>{props.link}</a>
            </details>
        </div>
    );
}