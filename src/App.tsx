import React, { useState } from 'react';
import PostItem from './components/PostItem';
import './styles/App.css';

function App() {
  const [posts, setPost] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript 2', body: 'Description'},
    {id: 3, title: 'Javascript 3', body: 'Description'},
  ])
  
  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>List of posts</h1>
      {posts.map(post =>
        <div className="">
          <PostItem post={post} key={post.id} />
        </div>
      )}
    </div>
  );
}

export default App;

