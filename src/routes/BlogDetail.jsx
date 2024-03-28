import { useParams } from "react-router-dom";
import React  from "react";
import {initialPosts} from '../components/data';
import {useNavigate } from "react-router-dom";

export default function BlogDetail () {
 // const [posts, setPosts] = useState(initialPosts);

  const navigate = useNavigate();

  function onDelete(deleteId) {
    for (let i = initialPosts.length - 1; i >= 0; --i) {
      if (initialPosts[i].id === deleteId) {
        if(window.confirm('Delete the item?')){
          initialPosts.splice(i, 1);
          break;
        }
      }
    }
   navigate("/");
  }

  const params = useParams();
  const post = initialPosts.find(post =>  post.id==params.id );
  console.log(post);
  return (
      <>
          <h2>{post.title}</h2>
          <p>{post.author}</p>
          <div className='blogDetailContent'>{post.content}</div>
          {/* <p>{params.id}</p> */}
          <a className='bouton' onClick={()=>onDelete(params.id)}>delete</a>

      </>
  )
}