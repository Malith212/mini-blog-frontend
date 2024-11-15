import React from 'react';
import './App.css';
import PostList from './components/PostList';
import AddPost from './components/AddPost';

function App() {
  return (
    <div className="App">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Mini Blog App</h1>
        <AddPost />
        <PostList />
      </div>
    </div>
  );
}

export default App;
