import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initialPosts } from '../components/data';



export default function NewPost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");


  function createNewPost() {
    const newPost = {
      id: newId(),
      title: title,
      author: author,
      content: content
    };
    initialPosts.push(newPost);
    navigate("/");
  }

  function newId() {
    let id;
    if (initialPosts.length === 0) {
      id = 1;
    } else {
      id = initialPosts[initialPosts.length - 1].id + 1;
    }
    return id;
  }

  return (
    <div id="newPostWrapper">
      <h2>Write a new post</h2>
      <form>
        <div id="titleInput">
          <label htmlFor="title">Title of post</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Post title..."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div id="tagsInput">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="author..."
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div id="textBodyInput">
          <label htmlFor="postText">Blog post</label>
          <textarea
            id="content"
            name="content"
            placeholder="Write your post here..."
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <button type="button" onClick={createNewPost}>
          Publish
        </button>
      </form>
    </div>
  );
}
