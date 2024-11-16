import React from 'react';
import AddComment from './AddComment';

const PostList = ({ posts }) => {
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Blog Posts</h2>
      {posts.length === 0 ? (
        <p className="text-center text-lg">No posts available yet.</p>
      ) : (
        posts.map(post => (
          <div key={post.id} className="bg-white shadow-md rounded-lg p-6 mb-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800">{post.title}</h3>
            <p className="mt-2 text-gray-600">{post.content}</p>

            {/* Displaying Comments */}
            <div className="mt-4">
              <h4 className="text-xl font-medium text-gray-700">Comments:</h4>
              {post.comments && post.comments.length > 0 ? (
                post.comments.map(comment => (
                  <div key={comment.id} className="bg-gray-100 p-4 rounded-lg mt-2">
                    <p className="text-gray-800">{comment.content}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No comments yet.</p>
              )}
            </div>

            {/* Add Comment Section */}
            <AddComment postId={post.id} />
          </div>
        ))
      )}
    </div>
  );
};

export default PostList;
