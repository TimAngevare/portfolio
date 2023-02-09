import {useEffect, useState} from "react";
import Post from "./Post";
import Data from '../resources/posts.json';

export default function PostSection() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        setPosts(Data.posts);

    }, []);

    return(
        <div>
            <hgroup>
                <h2>Posts</h2>
                <h3>Some thoughts and things I want to share... 🧠</h3>
            </hgroup>
            <div>
                { posts.map(postData =>
                    <Post title={postData.title} image={postData.image} summary={postData.description} link={postData.link}/>
                )}
            </div>
        </div>
    );
}