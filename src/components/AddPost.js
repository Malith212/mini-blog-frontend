import React, { useState } from 'react';
import axios from 'axios';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:5000/api/posts', {
      title,
      content,
    })
    .then(response => {
      alert(response.data.message);
      setTitle('');
      setContent('');
    })
    .catch(error => {
      console.error('Error creating post:', error);
    });
  };

  return (
    <div>
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Post Content"
          required
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default AddPost;
