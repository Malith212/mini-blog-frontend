import React, { useState } from 'react';
import axios from 'axios';

const AddComment = ({ postId }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://127.0.0.1:5000/api/posts/${postId}/comments`, {
      content: comment,
    })
    .then(response => {
      alert(response.data.message);
      setComment('');
    })
    .catch(error => {
      console.error('Error adding comment:', error);
    });
  };

  return (
    <div className="mt-6">
      <h3 className="text-xl font-medium text-gray-700">Add Comment</h3>
      <form onSubmit={handleSubmit} className="mt-2">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Your comment"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button type="submit" className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default AddComment;
