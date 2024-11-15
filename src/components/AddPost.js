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
    <div className="max-w-2xl mx-auto mt-12 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Post Content"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
