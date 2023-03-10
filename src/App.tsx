import React, { useState } from 'react';
import { ClassCounter } from './components/ClassCounter';
import { Counter } from './components/Counter';
import PostItem from './components/PostItem';
import './styles/App.css';

function App() {
  const [value, setValue] = useState('Text in input')
  
 
  return (
    <div className="App">   
      {/* <Counter />      
      <ClassCounter />   */}   
      <PostItem/>
      <PostItem/>
      <PostItem/>
      <PostItem/>
      <PostItem/>
    </div>
  );
}

export default App;
