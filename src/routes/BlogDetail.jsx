import { useParams } from "react-router-dom";
import {initialPosts} from '../components/data';

export default function BlogDetail () {
    const params = useParams();
    const post = initialPosts.find(post =>  post.id==params.id );
    console.log(post);
    return (
        <>
            <h1>Detail page</h1>
            <h2>{post.title}</h2>
            <p>{post.author}</p>
            <div>{post.content}</div>
            <p>{params.id}</p>

        </>
    )
}