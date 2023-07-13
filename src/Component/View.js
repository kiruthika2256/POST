import React from 'react';
import {Link } from 'react-router-dom'


const View = () => {


  const postCount = parseInt(localStorage.getItem('postcount') || '0', 10);

  const posts = Array.from({ length: 10 }, (_, i) => {
    const postIndex = (postCount + i) % 10;
    const post = localStorage.getItem(`post${postIndex}`);
    return post ? (
      <div key={i} className="item">
        <div className="content">
          <h2>Post:{postIndex+1}</h2>
          {post}
        </div>
      </div>
    ) : null;
  });

  

  return (
    <div className='ui main center aligned'>
      <div className='ui btn'>
      <button className=" fluid ui button yellow ">VIEW ALL</button>
      <Link to ='/'>
      <button  className=" fluid ui button yellow ">HOME</button>
      </Link>
      <button  className=" fluid ui button yellow ">COUNT {postCount}</button>

      </div>
     
      <div className="ui celled list custom-list">
        {posts}
      </div>

      
    </div>

  );
};

export default View;
