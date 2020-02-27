import React from 'react';
import './Post.css';

import user from '../assets/user.png';

import Comment from './Comment';

export default ({ data }) => {
  return (
    <div className="post">
      <div className="post-header">
        <img src={ user }/>
        <div className="user-info">
          <h4>{ data.author.name }</h4>
          <small>{ data.date }</small>
        </div>
      </div>
      <div className="user-post">
        <p>{ data.content }</p>
      </div>
      <hr />
      { data.comments.map(comment => <Comment key={ comment.id } data={ comment } />) }
    </div>
  )
}