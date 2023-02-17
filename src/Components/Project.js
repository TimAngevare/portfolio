
export default function Project(props) {
    return(
        <div>
            <details>
                <summary>{props.title}</summary>
                <div className="grid" >
                    {props.image !== undefined && <div>
                        <img src={props.image} style={{width: "40%"}} alt={props.title + " image"}/>
                    </div>}
                    <div>
                        <p>{props.summary}</p>
                        <a href={props.link}>{props.link}</a>
                    </div>
                </div>

            </details>
        </div>
    );
}