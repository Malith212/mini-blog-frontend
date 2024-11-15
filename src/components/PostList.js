import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {posts.map(post => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <h4>Comments:</h4>
          {post.comments && post.comments.map(comment => (
            <div key={comment.id} className="comment">
              <p>{comment.content}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PostList;
