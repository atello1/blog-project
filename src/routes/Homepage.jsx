
import {initialPosts} from '../components/data';
import Post from "./Post";


  export default function Homepage () {
      //console.log(initialPosts);
      return (
          <>
          <h1>Homepage</h1>
              <h2>Blog listing</h2>
              <ul>
                  {initialPosts.map(post => (
                    <>
                      <li key={post.id}>
                        <Post
                          id={post.id}
                          author={post.author}
                          title={post.title}
                          >
                          {post.content}
                        </Post>
                      </li>
                     </>
                  ))}

              </ul>
          </>
      )
  }