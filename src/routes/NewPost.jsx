import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initialPosts } from '../components/data';

export default function NewPost() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
  });

  const [errors, setErrors] = useState({
    title: '',
    author: '',
    content: '',
  });

  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (formData.title.trim() === '') {
      newErrors.title = 'Title is required';
      isValid = false;
    } else {
      newErrors.title = '';
    }
    if (formData.author.trim() === '') {
      newErrors.author = 'Author is required';
      isValid = false;
    } else {
      newErrors.author = '';
    }
    if (formData.content.trim() === '') {
      newErrors.content = 'Content is required';
      isValid = false;
    } else {
      newErrors.content = '';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted with data:', formData);
      const newPost = {
        id: newId(),
        title: formData.title,
        author: formData.author,
        content: formData.content
      };
      initialPosts.push(newPost);
      navigate("/");
    } else {
      console.log('Form has validation errors');
    }
  };

  function newId() {
    let id;
    if (initialPosts.length === 0) {
      id = 1;
    } else {
      id = initialPosts[initialPosts.length - 1].id + 1;
    }
    return id;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  };

  return (
    <div className="newPostWrapper">
      <h2>Write a new post</h2>
      <form onSubmit={handleSubmit}>
        <div className='inputWp'>
          <label htmlFor="title">Title of post</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
          <span className="errorMessage">{errors.title}</span>
        </div>
        <div className='inputWp'>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
          />
          <span className="errorMessage">{errors.author}</span>
        </div>
        <div className='inputWp'>
          <label htmlFor="postText">Blog post</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
          />
          <span className="errorMessage">{errors.content}</span>
        </div>
        <button type="submit">Publish</button>
      </form>
    </div>
  );
}
