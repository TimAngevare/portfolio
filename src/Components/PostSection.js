import {useEffect, useState} from "react";
import Post from "./Post";
import Data from '../resources/posts.json';

export default function PostSection() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        setPosts(Data.posts);

    }, []);

    return(
        <div id="posts">
            <hgroup>
                <h2>Blog</h2>
                <h3>Some thoughts and things I want to share... 🧠</h3>
            </hgroup>
            <div>
                { posts.map(postData =>
                    <Post title={postData.title} image={postData.image} date={postData.date} summary={postData.description} link={postData.link}/>
                )}
            </div>
        </div>
    );
}