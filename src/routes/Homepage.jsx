
import {initialPosts} from '../components/data';
import Post from "./Post";


  export default function Homepage () {
      //console.log(initialPosts);
      return (

              <ul className='blogListing'>
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

      )
  }