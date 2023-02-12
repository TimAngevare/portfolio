import imageTim from "../resources/tim.jpeg"
export default function Nav() {
    const imageStyle = {
        borderRadius : "50%",
        paddingRight : 10,
        maxWidth : 100
    }

    return(
        <nav>
            <ul>
                <li>
                    <img style={imageStyle} src={imageTim}/>
                </li>
                <li>
                    <strong>Tim Angevare</strong>
                </li>
            </ul>
            <ul>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#posts">Blog</a></li>
            </ul>
        </nav>
    );

}