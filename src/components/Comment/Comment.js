
import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <div className="comment-header">
        <img src={comment.avatar} alt="avatar" className="avatar" />
        <div className="comment-author">{comment.author}</div>
        <div className="comment-time">{comment.time}</div>
      </div>
      <div className="comment-body">{comment.text}</div>
      <div className="comment-actions">
        <button>Reply</button>
        <button>Like</button>
      </div>
    </div>
  );
};

export default Comment;
