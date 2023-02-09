import {useEffect, useState} from "react";

export default function Picture(props) {
    const [pictures, setPictures] = useState("");
    const locations = ["new york city", "buildings", "skyline", "nature"];
    const pictureStyle = {
        width: "90%",
        height: "auto",
        borderRadius: "30px",
        overflow: "hidden",
        boxShadow: "5px 5px 5px rgba(0,0,0,0.3)"
    }

    useEffect(() => {
        const ranInt = props.genRandomInt(locations)
        setPictures("https://source.unsplash.com/random/1100x300?" + locations[ranInt]);
    })



    return(
        <div className="container">
            <img src={pictures} style={pictureStyle} alt="a nice background"/>
        </div>
    );
}