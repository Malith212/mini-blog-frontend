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
    <div>
      <h3>Add Comment</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Your comment"
          required
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default AddComment;
