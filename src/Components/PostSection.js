import {useEffect, useState} from "react";
import Data from '../resources/posts.json';

export default function PostSection(props) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const postList = Data.posts;
        const recentList = [];
        if (props.limit != null) {
            for (let i = 0; i < props.limit; i++) {
                const index = (postList.length - 1) - i;
                if (index < 0) {
                    break;
                }
                recentList.push(postList[index]);
            }
            setPosts(recentList);
        } else {
            setPosts(postList);
        }


    }, []);

    return(
        <div id="posts">
            <hgroup>
                <h2>Blog</h2>
                <h3>Some thoughts and things I want to share... 🧠</h3>
            </hgroup>
            <hr/>
            {posts.length > 0 && <div>
                {posts.map(postData =>
                    <div>
                        <hgroup>
                            <a href={"/posts?id=" + postData.id}><h6>{postData.title}</h6></a>
                            <p>{postData.date}</p>
                        </hgroup>
                        <hr/>
                    </div>
                )}
            </div>}
        </div>
    );
}