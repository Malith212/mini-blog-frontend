import React from 'react';
import './App.css';
import PostList from './components/PostList';
import AddPost from './components/AddPost';

function App() {
  return (
    <div className="App">
      <h1>Mini Blog App</h1>
      <AddPost />
      <PostList />
    </div>
  );
}

export default App;
