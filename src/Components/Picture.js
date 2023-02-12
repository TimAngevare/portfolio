import {useEffect, useState} from "react";

export default function Picture(props) {
    const [pictures, setPictures] = useState("");
    const locations = ["buildings", "skyline", "nature", "pattern"];
    const pictureStyle = {
        width: "100%",
        height: "auto",
        borderRadius: "30px",
        overflow: "hidden",
        boxShadow: "5px 5px 5px rgba(0,0,0,0.3)"
    }

    const genPicture = () => {
        const ranInt = props.genRandomInt(locations)
        setPictures(`https://source.unsplash.com/random/${Math.round(window.screen.width * 0.9)}x${Math.round(window.screen.height * 0.3)}?${locations[ranInt]}`);
    }

    useEffect(() => {
        genPicture();
    })



    return(
        <div className="container">
            <div style={{paddingBottom : 15}}>
                <img src={pictures} style={pictureStyle} alt="a nice background"/>
            </div>
            <div style={{width : "50%"}}>
                <button onClick={genPicture}>Generate</button>
            </div>
        </div>
    );
}