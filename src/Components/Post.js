import Data from '../resources/posts.json';
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

export default function Post() {
    const location = useLocation();
    const [param, setParams] = new URLSearchParams(location.search).get('id');
    const [post, setPost] = useState(null);

    useEffect(() => {
        const postList = Data.posts
        setPost(postList[param]);
    }, [])

    return (
        <div>
            {post && <article>
                <header>
                    <div>
                        {post.title}
                    </div>
                    <p>{post.date}</p>
                </header>
                <div>
                    <div dangerouslySetInnerHTML={{__html: post.content}}/>
                </div>
            </article>}
        </div>

    );
}