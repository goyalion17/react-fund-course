import React from 'react';

function PostItem() {
  return (
    <div className="App">   
      <div className="post">
        <div className="post__content">
          <strong>1. Javascript</strong>
          <div>Javascript is programming language</div>
        </div>
        <div className="post__btn">
          <button>Delete</button>
        </div>
      </div> 
    </div>
  );
}

export default PostItem;