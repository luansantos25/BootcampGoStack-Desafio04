import React from 'react';
import './Comment.css';
import user from '../assets/user.png';

export default ({ data }) => {
  return (
    <div className="comment">
      <img src={user} />
      <p className="comment-content">
        <span className="comment-name">{ data.author.name } </span> 
        { data.content }
      </p>
    </div>
  )
}