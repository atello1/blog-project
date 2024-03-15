
import {initialPosts} from '../components/data';
import Post from "./Post";


  export default function Homepage () {

      return (
          <>
          <h1>Homepage</h1>
              <h2>Blog listing</h2>
              <ul>

                {/* call a componet post- for individual post, passing the id as props. So we do not load the the data array in two compoenents- duplicated? ana */}
                  {initialPosts.map(post => (
                    <>
                      <li key={post.id}>
                        <Post id={post.id} author={post.author}>
                          {post.content}
                        </Post>
                      </li>
                     </>
                  ))}

              </ul>
          </>
      )
  }