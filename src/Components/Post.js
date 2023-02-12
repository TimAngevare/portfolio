
export default function Post(props) {
    return(
        <div>
            <article>
                <header>
                    <div>
                        {props.title}
                    </div>
                    <p>{props.date}</p>
                </header>
                    <div className="grid">
                        { (props.image != undefined) &&
                            <img style={{ maxHeight : "300px"}} src={props.image}></img>}
                        <div>
                            <p>{props.summary}</p>
                            <a href={props.link}></a>
                        </div>
                    </div>
            </article>
        </div>
    );
}