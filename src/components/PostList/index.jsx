import React from 'react'
import './PostList.css';

function PostList({ posts}) {

  return (
    <div className="postList">
      {posts.map((post, index) => (
        <React.Fragment
          key={`post-${post.user}--${index}`}
        >
          {post.image && (
              <img
                className="post__image"
                style={{ width: 200, height: 100, objectFit:"cover"}}
                src={URL.createObjectURL(post.image)}
                alt="Post cover"
              />
          )}
          <p className="post__content">{post.content}</p>
          <div className="post__user">{post.user}</div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default PostList;
