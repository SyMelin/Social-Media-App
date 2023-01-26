import { useContext } from 'react';
import { UserContext } from '../App'
import './Post.css'

function Post({ post }) {
  const currentUser = useContext(UserContext)
  const isCurrentUser = currentUser === post.user

  return (
    <div className="post">
      {post.image && (
        <img
          className="post__image"
          style={{ width: 200, height: 100, objectFit:"cover"}}
          src={URL.createObjectURL(post.image)}
          alt="Post cover"
        />
      )}
      <p className="post__content">{post.content}</p>
      <div
        className="post__user"
        style={{ color: isCurrentUser && 'green'}}
      >
        {post.user}
      </div>
    </div>
  )
}

export default Post
