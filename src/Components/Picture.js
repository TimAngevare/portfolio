import { createApi } from 'unsplash-js';
import {useEffect, useState} from "react";

export default function Picture(props) {
    const [pictures, setPictures] = useState("");
    const locations = ["new york city", "Enschede", "Amersfoort"];
    const pictureStyle = {
        width: "90%",
        height: "auto",
        borderRadius: "30px",
        overflow: "hidden",
        boxShadow: "5px 5px 5px rgba(0,0,0,0.3)"
    }

    useEffect(() => {
        const ranInt = props.genRandomInt(locations)
        const unsplash = createApi({
            accessKey: process.env.REACT_APP_UNSPLASH_ACCESS,
            fetch: fetch,
        });
        const call = unsplash.photos.getRandom({
            query: locations[ranInt],
            orientation: 'landscape'
        }).then(res => {
            setPictures(res.response.urls.regular);
        })
    },[])



    return(
        <div className="container">
            <img src={pictures} style={pictureStyle}/>
        </div>
    );
}